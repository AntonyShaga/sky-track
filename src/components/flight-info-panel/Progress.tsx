import type { FlightSchedule } from "../../type/FlightData.ts";
import { InfoBox } from "./InfoBox";

export function Progress({ schedule }: { schedule: FlightSchedule }) {
  const { arrival, departure } = schedule;

  return (
    <div>
      <div className={"grid grid-cols-2 gap-1 mb-1"}>
        <InfoBox label="Schedule" value={departure.planned} />
        <InfoBox label="Actual" value={departure.actual} />
      </div>
      <div className={"grid grid-cols-2 gap-1 mb-1"}>
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
  );
}
