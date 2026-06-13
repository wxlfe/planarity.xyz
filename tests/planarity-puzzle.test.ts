import { describe, expect, test } from "vitest";
import {
  countCrossings,
  createPuzzle,
  findCrossingEdges,
  isSolved,
  planarSolution,
  puzzleEdges,
  segmentsIntersect
} from "../app/planarity-puzzle";

describe("planarity puzzle geometry", () => {
  test("creates a five node puzzle from a planar graph", () => {
    const puzzle = createPuzzle(0);

    expect(puzzle.nodes).toHaveLength(5);
    expect(puzzle.edges).toEqual([
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
      [0, 2],
      [1, 3]
    ]);
  });

  test("initial puzzle layout matches the app icon graph", () => {
    expect(createPuzzle(0).nodes).toEqual([
      { id: 0, x: 50, y: 18.95 },
      { id: 1, x: 79.69, y: 40.43 },
      { id: 2, x: 68.36, y: 75.39 },
      { id: 3, x: 31.64, y: 75.39 },
      { id: 4, x: 20.31, y: 40.43 }
    ]);
  });

  test("planar solution has no crossings", () => {
    expect(countCrossings(planarSolution, puzzleEdges)).toBe(0);
    expect(isSolved(planarSolution, puzzleEdges)).toBe(true);
  });

  test("scrambled puzzle starts with crossings but remains same planar topology", () => {
    const puzzle = createPuzzle(1);

    expect(puzzle.nodes).toHaveLength(5);
    expect(countCrossings(puzzle.nodes, puzzle.edges)).toBeGreaterThan(0);
    expect(countCrossings(planarSolution, puzzle.edges)).toBe(0);
  });

  test("identifies every edge involved in a crossing", () => {
    const puzzle = createPuzzle(0);
    const crossingEdges = findCrossingEdges(puzzle.nodes, puzzle.edges);

    expect(crossingEdges.size).toBeGreaterThan(0);
    expect(findCrossingEdges(planarSolution, puzzle.edges).size).toBe(0);
  });

  test("segment intersection ignores shared endpoints", () => {
    expect(
      segmentsIntersect(
        { x: 0, y: 0 },
        { x: 100, y: 100 },
        { x: 0, y: 0 },
        { x: 100, y: 0 }
      )
    ).toBe(false);
  });
});
