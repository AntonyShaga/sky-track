import { type AirportInfo } from "../../type/FlightData.ts";

interface Props {
  fromInfo: AirportInfo;
  toInfo: AirportInfo;
}
const Route = ({ fromInfo, toInfo }: Props) => {
  const { code: fromCode, city: fromCity, timezone: fromTimezone } = fromInfo;
  const { code: toCode, city: toCity, timezone: toTimezone } = toInfo;
  return (
    <div className={"flex flex-row gap-x-0.5 mb-0.5"}>
      <div
        className={
          "flex items-center flex-col gap-x-0.5 p-2 flex-1 text-xs bg-neutral-800 rounded-tl-md"
        }
      >
        <p className={"font-semibold text-3xl"}>{fromCode}</p>
        <p className={"text-sm"}>{fromCity}</p>
        <p className={"text-gray-400 text-xs"}>{fromTimezone}</p>
      </div>
      <div
        className={
          "flex items-center flex-col gap-x-0.5 p-2 flex-1 text-xs bg-neutral-800 rounded-tr-md"
        }
      >
        <p className={"font-semibold text-3xl"}>{toCode}</p>
        <p className={"text-sm"}>{toCity}</p>
        <p className={"text-gray-400 text-xs"}>{toTimezone}</p>
      </div>
    </div>
  );
};

export default Route;
