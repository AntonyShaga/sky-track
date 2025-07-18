import { FlightListCard } from "./components/flight-list/FlightListCard.tsx";
import { FlightInfoPanel } from "./components/flight-info-panel/FlightInfoPanel.tsx";

export function Home() {
  return (
    <h1 className={" mx-auto flex justify-between"}>
      <FlightListCard />
      <FlightInfoPanel />
    </h1>
  );
}
