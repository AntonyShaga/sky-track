import { Header } from "./Header.tsx";
import Route from "./Route.tsx";
import Progress from "./Progress.tsx";
import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constans.ts";
import { FLIGTHS_DATA } from "../flight-list/fligths.data.ts";
import { FlightInfo } from "./FlightInfo.tsx";

const FlightInfoPanel = () => {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);
  const flight = FLIGTHS_DATA.find((el) => el.airline === selectedFlight);
  if (!flight) {
    return null;
  }

  return (
    <div className={"bg-neutral-900 rounded-xl w-sm sticky top-10 h-fit"}>
      <div
        className={"rounded-xl"}
        style={{
          height: "520px",
          backgroundImage: `url(${flight.aircraftImageUrl})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
        }}
      >
        <div className={"p-3"}>
          <Header airline={flight.airline} flightNumber={flight.flightNumber} />
        </div>
      </div>

      <div className={" p-3 "}>
        <Route fromInfo={flight.from} toInfo={flight.to} />
        <Progress schedule={flight.schedule} progress={flight.progress} />
        <FlightInfo
          speed={flight.speed}
          altitude={flight.altitude}
          aircraft={flight.aircraft}
        />
      </div>
    </div>
  );
};

export default FlightInfoPanel;
