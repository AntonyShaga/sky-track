import FlightProgressBar from "../FlightProgressBar";
import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "./flights.constans.ts";
import { cn } from "../../utils/cn.ts";
import type { FlightData } from "../../type/FlightData.ts";

interface Props {
  flight: FlightData;
}

const FlightCard = ({ flight }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);

  const isActive = selectedFlight === flight.airline;

  return (
    <div
      className={cn(
        "rounded-lg p-0.5 w-full transition-colors ease-in",
        isActive
          ? "bg-gradient-to-r from-rose-500  to-orange-400"
          : "bg-transparent",
      )}
    >
      <button
        className={cn(
          "bg-neutral-900 h-full w-full block rounded-lg min-w-fit p-5",
        )}
        onClick={() => {
          setSearchParams({ [QUERY_PARAM_FLIGHT]: flight.airline });
        }}
      >
        <div className="flex justify-between items-center mb-7">
          <div className="flex items-center gap-3">
            <img
              src={flight.airlineIconUrl}
              alt={flight.airline}
              width={40}
              height={40}
              className="rounded-full bg-white"
            />
            <span>{flight.flightNumber}</span>
          </div>
          <div>
            <span className="bg-neutral-800 rounded-xl text-gray-400 text-xs  py-1 px-2">
              {flight.aircraftReg}
            </span>
          </div>
        </div>

        <div className="flex items-stretch flex-col gap-4">
          <div className="flex text-sm  text-gray-400 justify-between  break-words leading-tight">
            <div>{flight.from.city}</div>
            <div>{flight.to.city}</div>
          </div>
          <div className="flex-1 flex min-w-52 gap-5">
            <div className="text-3xl font-bold grow">{flight.from.code}</div>
            <FlightProgressBar totalDistance={233} />
            <div className="text-3xl font-bold whitespace-nowrap">
              {flight.to.code}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default FlightCard;
