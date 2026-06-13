export type Point = {
  x: number;
  y: number;
};

export type PuzzleNode = Point & {
  id: number;
};

export type PuzzleEdge = readonly [number, number];

export const puzzleEdges: PuzzleEdge[] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 2],
  [1, 3]
];

export const planarSolution: PuzzleNode[] = [
  { id: 0, x: 20, y: 20 },
  { id: 1, x: 50, y: 50 },
  { id: 2, x: 80, y: 20 },
  { id: 3, x: 80, y: 80 },
  { id: 4, x: 20, y: 80 }
];

const scrambledLayouts: PuzzleNode[][] = [
  [
    { id: 0, x: 50, y: 18.95 },
    { id: 1, x: 79.69, y: 40.43 },
    { id: 2, x: 68.36, y: 75.39 },
    { id: 3, x: 31.64, y: 75.39 },
    { id: 4, x: 20.31, y: 40.43 }
  ],
  [
    { id: 0, x: 50, y: 18.95 },
    { id: 1, x: 68.36, y: 75.39 },
    { id: 2, x: 79.69, y: 40.43 },
    { id: 3, x: 20.31, y: 40.43 },
    { id: 4, x: 31.64, y: 75.39 }
  ],
  [
    { id: 0, x: 49, y: 18 },
    { id: 1, x: 22, y: 68 },
    { id: 2, x: 79, y: 67 },
    { id: 3, x: 28, y: 35 },
    { id: 4, x: 76, y: 28 }
  ]
];

export function createPuzzle(index: number) {
  const layout = scrambledLayouts[index % scrambledLayouts.length];

  return {
    nodes: layout.map((node) => ({ ...node })),
    edges: puzzleEdges
  };
}

export function isSolved(nodes: PuzzleNode[], edges: PuzzleEdge[] = puzzleEdges) {
  return countCrossings(nodes, edges) === 0;
}

export function countCrossings(nodes: PuzzleNode[], edges: PuzzleEdge[]) {
  let crossings = 0;

  for (let i = 0; i < edges.length; i += 1) {
    for (let j = i + 1; j < edges.length; j += 1) {
      const [a, b] = edges[i];
      const [c, d] = edges[j];

      if (a === c || a === d || b === c || b === d) {
        continue;
      }

      if (segmentsIntersect(nodes[a], nodes[b], nodes[c], nodes[d])) {
        crossings += 1;
      }
    }
  }

  return crossings;
}

export function findCrossingEdges(nodes: PuzzleNode[], edges: PuzzleEdge[]) {
  const crossingEdges = new Set<number>();

  for (let i = 0; i < edges.length; i += 1) {
    for (let j = i + 1; j < edges.length; j += 1) {
      const [a, b] = edges[i];
      const [c, d] = edges[j];

      if (a === c || a === d || b === c || b === d) {
        continue;
      }

      if (segmentsIntersect(nodes[a], nodes[b], nodes[c], nodes[d])) {
        crossingEdges.add(i);
        crossingEdges.add(j);
      }
    }
  }

  return crossingEdges;
}

export function segmentsIntersect(a: Point, b: Point, c: Point, d: Point) {
  if (samePoint(a, c) || samePoint(a, d) || samePoint(b, c) || samePoint(b, d)) {
    return false;
  }

  const abC = direction(a, b, c);
  const abD = direction(a, b, d);
  const cdA = direction(c, d, a);
  const cdB = direction(c, d, b);

  return abC * abD < 0 && cdA * cdB < 0;
}

function direction(a: Point, b: Point, c: Point) {
  return (c.x - a.x) * (b.y - a.y) - (c.y - a.y) * (b.x - a.x);
}

function samePoint(a: Point, b: Point) {
  return a.x === b.x && a.y === b.y;
}
