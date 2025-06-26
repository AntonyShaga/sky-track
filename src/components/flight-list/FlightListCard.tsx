import { FLIGTHS_DATA } from "./fligths.data.ts";
import FlightCard from "./FlightCard.tsx";

export function FlightListCard() {
  return (
    <div className="w-sm  space-y-4 min-w-fit max-h-screen ">
      {FLIGTHS_DATA.map((flight) => (
        <FlightCard key={flight.airline} flight={flight} />
      ))}
    </div>
  );
}
