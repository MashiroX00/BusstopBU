// lib/hooks/useRefPositionBetween.ts
import { useEffect, useState, RefObject } from "react";

export function useRefPositionBetween(
  startRef: RefObject<HTMLElement | null>,
  endRef: RefObject<HTMLElement | null>,
  progress: number,
  offset: { endOffsetX?: number; endOffsetY?: number } = {}
) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (startRef.current && endRef.current) {
      const start = startRef.current.getBoundingClientRect();
      const end = endRef.current.getBoundingClientRect();

      const dx = (end.left + (offset.endOffsetX ?? 0)) - start.left;
      const dy = (end.top + (offset.endOffsetY ?? 0)) - start.top;

      const ratio = Math.min(Math.max(progress / 100, 0), 1); // clamp 0–1

      setPosition({
        x: start.left + dx * ratio,
        y: start.top + dy * ratio,
      });
    }
  }, [progress, startRef, endRef, offset.endOffsetX, offset.endOffsetY]);

  return position;
}
