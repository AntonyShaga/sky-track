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
    <div className="my-3.5">
      <div className="bg-[#282828] mb-1 font-medium p-mini-element rounded-t-xl">
        Flight information
      </div>

      <div className="grid grid-cols-2 gap-1 mb-1">
        <InfoBox value={model} />
        <InfoBox
          value={
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center">
                <CountryFlag code={countryFlag} />
              </div>
              <span>{country}</span>
            </div>
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-1 mb-1">
        <InfoBox label="Speed" value={speed} className="rounded-bl-md" />
        <InfoBox label="Altitude" value={altitude} className="rounded-br-md" />
      </div>
    </div>
  );
}
