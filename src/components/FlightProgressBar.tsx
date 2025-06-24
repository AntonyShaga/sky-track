"use client";

import { useFlightProgressBar } from "../hoks/useFlightProgressBar.ts";

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
      className="relative self-center w-full h-1 bg-gray-200 rounded"
      ref={barRef}
    >
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded"
        style={{ width: `${safeVisualWidthPercent}%` }}
      />

      <div
        className="absolute top-0 -translate-x-1/2 cursor-pointer"
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
        ✈️
      </div>
    </div>
  );
}
