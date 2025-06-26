import FlightProgressBar from "../FlightProgressBar.tsx";
import type { FlightProgress, FlightSchedule } from "../../type/FlightData.ts";
import { InfoBox } from "./InfoBox";

interface Props {
  schedule: FlightSchedule;
  progress: FlightProgress;
}

export function Progress({ schedule, progress }: Props) {
  const { arrival, departure } = schedule;
  const {
    completedDuration,
    completedDistanceKm,
    totalDuration,
    totalDistanceKm,
  } = progress;

  return (
    <div className="flex flex-col gap-y-0.5 mb-3">
      <div className="flex flex-col text-xs bg-neutral-800">
        <div className="py-5">
          <FlightProgressBar totalDistance={totalDistanceKm} />
        </div>
        <div className="flex justify-between p-2">
          <p className="text-gray-400">
            {totalDistanceKm} km {totalDuration}
          </p>
          <p>
            {completedDistanceKm} km {completedDuration}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-0.5 text-xs">
        <div className="flex gap-x-0.5">
          <InfoBox
            label="Schedule"
            value={departure.planned}
            className="rounded-bl-md"
          />
          <InfoBox label="Actual" value={departure.actual} />
        </div>
        <div className="flex gap-x-0.5">
          <InfoBox
            label="Schedule"
            value={arrival.planned}
            className="rounded-bl-md"
          />
          <InfoBox
            label="Estimated"
            value={arrival.estimated}
            className="rounded-br-md"
          />
        </div>
      </div>
    </div>
  );
}
