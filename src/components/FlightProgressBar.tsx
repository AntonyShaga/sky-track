"use client";

import { useFlightProgressBar } from "../hoks/useFlightProgressBar.ts";
import FlightIcon from "./FlightIcon.tsx";

type FlightProgressBarProps = {
  totalDistance: number;
  initialElapsedDistance?: number;
  keyboardStep?: number;
  onChange?: (finalElapsedDistance: number) => void;
};

export default function FlightProgressBar({
  totalDistance,
  initialElapsedDistance = 0,
  keyboardStep = 5,
  onChange,
}: FlightProgressBarProps) {
  const {
    barRef,
    safeVisualWidthPercent,
    internalElapsed,
    handlePointerDown,
    handleKeyDown,
  } = useFlightProgressBar({
    totalDistance,
    initialElapsedDistance,
    keyboardStep,
    onChange,
  });

  return (
    <div
      className="relative self-center w-full h-0.5 bg-neutral-600 rounded"
      ref={barRef}
    >
      <div
        className="absolute top-0 left-0 h-full rounded"
        style={{
          width: `${safeVisualWidthPercent}%`,
          background: "linear-gradient(to right, #8b0000, #ff8c00, #f0e68c)",
        }}
      />

      <div
        className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer rotate-[45deg]"
        style={{ left: `${safeVisualWidthPercent}%` }}
        onPointerDown={handlePointerDown}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-valuenow={Math.round(internalElapsed)}
        aria-valuemin={0}
        aria-valuemax={totalDistance}
        aria-label="Прогресс полета"
        aria-valuetext={`Пролетели ${Math.round(internalElapsed)} из ${totalDistance} километров`}
        tabIndex={0}
      >
        <FlightIcon />
      </div>
    </div>
  );
}
