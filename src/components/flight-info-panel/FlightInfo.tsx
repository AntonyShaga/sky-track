import type { AircraftInfo } from "../../type/FlightData.ts";

interface Props {
  speed: string;
  altitude: string;
  aircraft: AircraftInfo;
}

export function FlightInfo({ speed, altitude, aircraft }: Props) {
  const { model, countryFlag, country } = aircraft;
  return (
    <div className={"flex flex-col gap-y-0.5"}>
      <h3 className={"bg-neutral-700 rounded-t-md  p-1 text-xs"}>
        Flight information
      </h3>
      <div className={"flex flex-row gap-x-0.5 text-xs"}>
        <div className={"bg-neutral-800 flex-1 p-2"}>
          <p>{model}</p>
        </div>
        <div className={"flex flex-row bg-neutral-800 flex-1 p-2"}>
          <p>{countryFlag}</p>
          <p>{country}</p>
        </div>
      </div>
      <div className={"flex flex-row gap-x-0.5 text-xs"}>
        <div
          className={
            "flex flex-row bg-neutral-800 rounded-bl-md flex-1 p-2 justify-between"
          }
        >
          <p className={"text-gray-400"}>Speed</p>
          <p>{speed}</p>
        </div>
        <div
          className={
            "flex flex-row bg-neutral-800 rounded-br-md flex-1 p-2 justify-between"
          }
        >
          <p className={"text-gray-400"}>Altitude</p>
          <p className={"whitespace-nowrap"}>{altitude}</p>
        </div>
      </div>
    </div>
  );
}
