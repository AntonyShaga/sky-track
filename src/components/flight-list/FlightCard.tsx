import FlightProgressBar from "../FlightProgressBar";
import type { FlightInfo } from "./fligths.data.ts";

interface Props {
  flight: FlightInfo;
}

const FlightCard = ({ flight }: Props) => {
  return (
    <div className="bg-neutral-900 rounded-lg min-w-fit p-5">
      <div className="flex justify-between items-center mb-7">
        <div className="flex items-center gap-3">
          <img
            src={flight.logoUrl}
            alt={flight.airline}
            width={40}
            height={40}
            className="rounded-full bg-white"
          />
          <span>{flight.airline}</span>
        </div>
        <div>
          <span className="bg-neutral-800 rounded-xl py-1 px-2">
            {flight.aircraftReg}
          </span>
        </div>
      </div>

      <div className="flex items-stretch flex-col gap-4">
        <div className="flex text-sm  text-gray-400 justify-between  break-words leading-tight">
          <div>{flight.fromCity}</div>
          <div>{flight.toCity}</div>
        </div>
        <div className="flex-1 flex min-w-52 gap-5">
          <div className="text-3xl font-bold grow">{flight.fromCode}</div>
          <FlightProgressBar totalDistance={233} />
          <div className="text-3xl font-bold whitespace-nowrap">
            {flight.toCode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
