import { type AirportInfo } from "../../type/FlightData.ts";
import { AirportCard } from "./AirportCard.tsx";

const FlightRoute = ({
  fromInfo,
  toInfo,
}: {
  fromInfo: AirportInfo;
  toInfo: AirportInfo;
}) => {
  return (
    <div className={"grid grid-cols-2 gap-1 mb-1 relative"}>
      <AirportCard info={fromInfo} className="rounded-tl-xl" />
      <AirportCard info={toInfo} className="rounded-tr-xl" />

      <div
        className={
          "flex items-center justify-center mb-2 bg-neutral-950 rounded-full w-12 h-12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        }
      >
        {/*size = 22*/}
        🛫
      </div>
    </div>
  );
};

export default FlightRoute;
