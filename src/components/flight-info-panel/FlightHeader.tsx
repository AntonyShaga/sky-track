import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constans.ts";

export function FlightHeader({
  flightNumber,
  airline,
}: {
  flightNumber: string;
  airline: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div
      className={
        "bg-[#1a1a1a] px-4 py-3 flex items-center justify-between absolute top-3.5 left-1/2 -translate-x-1/2 w-11/12 rounded-xl h-max"
      }
    >
      <div>
        <h2 className={"text-amber-400 text-xl font-medium"}>{flightNumber}</h2>
        <p className={"text-sm text-gray-300"}>{airline}</p>
      </div>
      <button
        className={
          "text-gray-400 hover:text-white transition-colors bg-neutral-700 p-1 rounded-full"
        }
        onClick={() => {
          searchParams.delete(QUERY_PARAM_FLIGHT);
          setSearchParams(searchParams);
        }}
      >
        <div>{/*size-20 animate on hover animate on tap*/}❌</div>
      </button>
    </div>
  );
}
