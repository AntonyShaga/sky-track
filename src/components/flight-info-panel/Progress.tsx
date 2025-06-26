import FlightProgressBar from "../FlightProgressBar.tsx";
import type { FlightProgress, FlightSchedule } from "../../type/FlightData.ts";
interface Props {
  schedule: FlightSchedule;
  progress: FlightProgress;
}
const Progress = ({ schedule, progress }: Props) => {
  const { arrival, departure } = schedule;
  const {
    completedDuration,
    completedDistanceKm,
    totalDuration,
    totalDistanceKm,
  } = progress;
  return (
    <div className={"flex flex-col gap-y-0.5 mb-3"}>
      <div className={"flex flex-col text-xs justify-between bg-neutral-800 "}>
        <div className={"py-5"}>
          <FlightProgressBar totalDistance={totalDistanceKm} />
        </div>
        <div className={"flex flex-row   p-2 justify-between"}>
          <p className={"text-gray-400"}>
            {totalDistanceKm} km {totalDuration}
          </p>
          <p>
            {completedDistanceKm} km {completedDuration}
          </p>
        </div>
      </div>
      <div className={"flex flex-col gap-y-0.5"}>
        <div className={"flex flex-row gap-x-0.5 text-xs"}>
          <div
            className={
              "flex flex-row bg-neutral-800 rounded-bl-md flex-1 p-2 justify-between"
            }
          >
            <p className={"text-gray-400"}>Schedule</p>
            <p>{departure.planned}</p>
          </div>
          <div
            className={
              "flex flex-row bg-neutral-800 justify-between flex-1 p-2"
            }
          >
            <p className={"text-gray-400"}> Actual</p>
            <p>{departure.actual}</p>
          </div>
        </div>
        <div className={"flex flex-row gap-x-0.5 text-xs"}>
          <div
            className={
              "flex flex-row bg-neutral-800 rounded-bl-md flex-1 p-2 justify-between"
            }
          >
            <p className={"text-gray-400"}>Schedule</p>
            <p>{arrival.planned}</p>
          </div>
          <div
            className={
              "flex flex-row bg-neutral-800 rounded-br-md flex-1 p-2 justify-between"
            }
          >
            <p className={"text-gray-400"}>Estimated</p>
            <p className={"whitespace-nowrap"}>{arrival.estimated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
