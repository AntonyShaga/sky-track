import { useState, useEffect, useCallback, useRef } from "react";

interface UseFlightProgressBarProps {
  totalDistance: number;
  initialElapsedDistance?: number;
  keyboardStep?: number;
  onChange?: (finalElapsedDistance: number) => void;
}

interface UseFlightProgressBarReturn {
  barRef: React.RefObject<HTMLDivElement | null>;
  safeVisualWidthPercent: number;
  internalElapsed: number;
  handlePointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const useFlightProgressBar = ({
  totalDistance,
  initialElapsedDistance = 0,
  keyboardStep = 5,
  onChange,
}: UseFlightProgressBarProps): UseFlightProgressBarReturn => {
  const barRef = useRef<HTMLDivElement>(null);
  const [internalElapsed, setInternalElapsed] = useState(
    initialElapsedDistance,
  );

  useEffect(() => {
    const clampedInitial = Math.min(
      Math.max(initialElapsedDistance, 0),
      totalDistance,
    );
    setInternalElapsed(clampedInitial);
  }, [initialElapsedDistance, totalDistance]);

  const visualWidthPercent =
    totalDistance > 0 ? (internalElapsed / totalDistance) * 100 : 0;
  const safeVisualWidthPercent = Math.min(Math.max(visualWidthPercent, 0), 100);

  const handleDrag = useCallback(
    (e: PointerEvent) => {
      e.preventDefault();
      const bar = barRef.current;
      if (!bar) return;

      const rect = bar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const barWidth = rect.width;

      let newElapsed = (clickX / barWidth) * totalDistance;
      newElapsed = Math.min(Math.max(newElapsed, 0), totalDistance);

      setInternalElapsed(Math.round(newElapsed));
    },
    [totalDistance],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      let newElapsed: number;

      if (e.key === "ArrowRight") {
        newElapsed = internalElapsed + keyboardStep;
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        newElapsed = internalElapsed - keyboardStep;
        e.preventDefault();
      } else {
        return;
      }

      newElapsed = Math.min(Math.max(newElapsed, 0), totalDistance);

      if (newElapsed !== internalElapsed) {
        setInternalElapsed(Math.round(newElapsed));
        onChange?.(Math.round(newElapsed));
      }
    },
    [internalElapsed, totalDistance, keyboardStep, onChange],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      const move = (moveEvent: PointerEvent) => handleDrag(moveEvent);
      const up = () => {
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerup", up);
        onChange?.(Math.round(internalElapsed));
      };
      document.addEventListener("pointermove", move);
      document.addEventListener("pointerup", up);
      handleDrag(e.nativeEvent);
    },
    [handleDrag, onChange, internalElapsed],
  );

  return {
    barRef,
    safeVisualWidthPercent,
    internalElapsed,
    handlePointerDown,
    handleKeyDown,
  };
};
