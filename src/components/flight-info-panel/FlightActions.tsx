import { FlightActionButton } from "./FlightActionButton.tsx";

export function FlightActions() {
  return (
    <div>
      <div className={"grid grid-cols-4 gap-1"}>
        <FlightActionButton
          value={"Route"}
          className={"rounded-tl-xl rounded-bl-xl"}
        />
        <FlightActionButton value={"Follow"} />
        <FlightActionButton value={"Share"} />
        <FlightActionButton
          value={"More"}
          className={"rounded-tr-xl rounded-br-xl"}
        />
      </div>
    </div>
  );
}
