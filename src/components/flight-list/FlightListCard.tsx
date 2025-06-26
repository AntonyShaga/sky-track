import { FLIGTHS_DATA } from "./fligths.data.ts";
import FlightCard from "./FlightCard.tsx";

const FlightListCard = () => {
  return (
    <div className={"w-sm space-y-4 min-w-fit"}>
      {FLIGTHS_DATA.map((flight) => (
        <FlightCard key={flight.airline} flight={flight} />
      ))}
    </div>
  );
};

export default FlightListCard;
