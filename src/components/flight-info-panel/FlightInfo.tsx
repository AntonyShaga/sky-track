import type { AircraftInfo } from "../../type/FlightData.ts";
import { CountryFlag } from "./CountryFlagProps.tsx";
import { InfoBox } from "./InfoBox";

interface Props {
  speed: string;
  altitude: string;
  aircraft: AircraftInfo;
}

export function FlightInfo({ speed, altitude, aircraft }: Props) {
  const { model, countryFlag, country } = aircraft;

  return (
    <div className="flex flex-col gap-y-0.5">
      <h3 className="bg-neutral-700 rounded-t-md p-1 text-xs">
        Flight information
      </h3>

      <div className="flex gap-x-0.5 text-xs">
        <InfoBox value={model} />
        <InfoBox
          value={
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center">
                <CountryFlag code={countryFlag} />
              </span>
              {country}
            </div>
          }
        />
      </div>

      <div className="flex gap-x-0.5 text-xs">
        <InfoBox label="Speed" value={speed} className="rounded-bl-md" />
        <InfoBox label="Altitude" value={altitude} className="rounded-br-md" />
      </div>
    </div>
  );
}
