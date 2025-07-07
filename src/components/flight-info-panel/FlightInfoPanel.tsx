import FlightRoute from "./FlightRoute.tsx";
import { Progress } from "./Progress.tsx";
import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constans.ts";
import { FLIGTHS_DATA } from "../flight-list/fligths.data.ts";
import { FlightInfo } from "./FlightInfo.tsx";
import { FlightHeader } from "./FlightHeader.tsx";
import { FlightImage } from "./FlightImage.tsx";

export function FlightInfoPanel() {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);
  const flight = FLIGTHS_DATA.find((el) => el.airline === selectedFlight);
  if (!flight) {
    return null;
  }

  return (
    <aside
      className={
        "absolute w-sm top-1/2 -translate-y-1/2 right-7 rounded-xl overflow-hidden bg-[#101010]"
      }
    >
      <FlightHeader
        airline={flight.airline}
        flightNumber={flight.flightNumber}
      />
      <FlightImage
        airline={flight.airline}
        flightImg={flight.aircraftImageUrl}
      />

      <div className={" p-3 "}>
        <FlightRoute fromInfo={flight.from} toInfo={flight.to} />
        <Progress schedule={flight.schedule} progress={flight.progress} />
        <FlightInfo
          speed={flight.speed}
          altitude={flight.altitude}
          aircraft={flight.aircraft}
        />
      </div>
    </aside>
  );
}
