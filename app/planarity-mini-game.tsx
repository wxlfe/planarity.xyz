"use client";

import { useEffect, useRef, useState } from "react";
import {
  countCrossings,
  createPuzzle,
  findCrossingEdges,
  isSolved,
} from "./planarity-puzzle";

const resetDelay = 900;

export default function PlanarityMiniGame() {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [{ nodes, edges }, setPuzzle] = useState(() => createPuzzle(0));
  const [draggingNode, setDraggingNode] = useState<number | null>(null);
  const [solved, setSolved] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{
    nodeX: number;
    nodeY: number;
    pointerX: number;
    pointerY: number;
  } | null>(null);
  const [boardSize, setBoardSize] = useState({ width: 0, height: 0 });
  const crossings = countCrossings(nodes, edges);
  const crossingEdges = findCrossingEdges(nodes, edges);
  const nodeRadius = Math.max(18, Math.min(22, boardSize.width / 22 || 18));

  useEffect(() => {
    if (!boardRef.current) {
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      setBoardSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height
      });
    });

    observer.observe(boardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!solved) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setPuzzleIndex((current) => {
        const nextIndex = current + 1;
        setPuzzle(createPuzzle(nextIndex));
        return nextIndex;
      });
      setSolved(false);
    }, resetDelay);

    return () => window.clearTimeout(timeout);
  }, [solved]);

  function toPixel(node: { x: number; y: number }) {
    return {
      x: (node.x / 100) * boardSize.width,
      y: (node.y / 100) * boardSize.height
    };
  }

  function toNormalized(point: { x: number; y: number }) {
    return {
      x: (point.x / boardSize.width) * 100,
      y: (point.y / boardSize.height) * 100
    };
  }

  function pointerPosition(event: React.PointerEvent<HTMLElement>) {
    const bounds = boardRef.current?.getBoundingClientRect();

    if (!bounds) {
      return { x: 0, y: 0 };
    }

    return {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top
    };
  }

  function moveNode(id: number, point: { x: number; y: number }) {
    const nextNodes = nodes.map((node) =>
      node.id === id ? { ...node, x: clamp(point.x), y: clamp(point.y) } : node
    );

    setPuzzle({ nodes: nextNodes, edges });

    if (!solved && isSolved(nextNodes, edges)) {
      setSolved(true);
    }
  }

  function handleKeyDown(id: number, event: React.KeyboardEvent<HTMLButtonElement>) {
    const keyMoves: Record<string, { x: number; y: number }> = {
      ArrowDown: { x: 0, y: 1 },
      ArrowLeft: { x: -1, y: 0 },
      ArrowRight: { x: 1, y: 0 },
      ArrowUp: { x: 0, y: -1 }
    };
    const move = keyMoves[event.key];

    if (!move) {
      return;
    }

    event.preventDefault();
    const step = event.shiftKey ? 8 : 3;
    const node = nodes.find((candidate) => candidate.id === id);

    if (node) {
      moveNode(id, { x: node.x + move.x * step, y: node.y + move.y * step });
    }
  }

  return (
    <div
      ref={boardRef}
      className="mini-game"
      aria-label="mini planarity puzzle"
      onPointerMove={(event) => {
        if (draggingNode !== null && dragStartRef.current) {
          event.preventDefault();
          const pos = pointerPosition(event);
          moveNode(
            draggingNode,
            toNormalized({
              x: dragStartRef.current.nodeX + pos.x - dragStartRef.current.pointerX,
              y: dragStartRef.current.nodeY + pos.y - dragStartRef.current.pointerY
            })
          );
        }
      }}
      onPointerUp={() => {
        setDraggingNode(null);
        dragStartRef.current = null;
      }}
      onPointerCancel={() => {
        setDraggingNode(null);
        dragStartRef.current = null;
      }}
    >
      {boardSize.width > 0 && boardSize.height > 0 ? (
        <svg
          className="mini-game-svg"
          viewBox={`0 0 ${boardSize.width} ${boardSize.height}`}
          aria-hidden="true"
        >
          {edges.map(([from, to], index) => {
            const p1 = toPixel(nodes[from]);
            const p2 = toPixel(nodes[to]);
            const isCrossingEdge = crossingEdges.has(index) && !solved;

            return (
              <line
                data-puzzle-crossing-edge={isCrossingEdge ? "true" : undefined}
                data-puzzle-edge="true"
                className="mini-game-edge"
                key={`${from}-${to}`}
                strokeDasharray={isCrossingEdge ? "4 3" : undefined}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
              />
            );
          })}
        </svg>
      ) : null}

      {nodes.map((node) => (
        <button
          aria-label={`node ${node.id + 1}`}
          className="mini-game-node"
          data-puzzle-node="true"
          key={node.id}
          onKeyDown={(event) => handleKeyDown(node.id, event)}
          onPointerDown={(event) => {
            const pos = pointerPosition(event);
            const nodePos = toPixel(node);

            event.preventDefault();
            event.currentTarget.setPointerCapture(event.pointerId);
            setDraggingNode(node.id);
            dragStartRef.current = {
              nodeX: nodePos.x,
              nodeY: nodePos.y,
              pointerX: pos.x,
              pointerY: pos.y
            };
          }}
          style={{
            height: nodeRadius * 2,
            left: toPixel(node).x - nodeRadius,
            top: toPixel(node).y - nodeRadius,
            width: nodeRadius * 2,
            zIndex: draggingNode === node.id ? 5 : 2
          }}
          type="button"
        >
          <span className="mini-game-node-glow" aria-hidden="true" />
          <span className="mini-game-node-circle" data-puzzle-node-circle="true" />
        </button>
      ))}

      <p className="mini-game-status" aria-live="polite">
        {solved ? "solved" : `${crossings} crossings`}
      </p>
      {solved ? (
        <div className="mini-game-check" data-puzzle-check="true" aria-hidden="true">
          <svg className="mini-game-check-mark" viewBox="0 0 100 100">
            <path d="M18 53L39 74L84 25" />
          </svg>
        </div>
      ) : null}
    </div>
  );
}

function clamp(value: number) {
  return Math.min(90, Math.max(10, value));
}
