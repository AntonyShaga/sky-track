import type { AirportInfo } from "../../type/FlightData.ts";

export function AirportCard({
  info,
  className,
}: {
  info: AirportInfo;
  className: string;
}) {
  const { code, timezone, city } = info;
  return (
    <div
      className={`px-element py-element text-center bg-neutral-800 ${className}`}
    >
      <h3 className="font-semibold text-4xl mb-1.5 text-white">{code}</h3>
      <p className="text-lg mb-1 font-medium text-neutral-200">{city}</p>
      <p className="text-neutral-500 text-sm font-medium">{timezone}</p>
    </div>
  );
}
