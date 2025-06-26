import FlightListCard from "./components/flight-list/FlightListCard.tsx";
import FlightInfoPanel from "./components/flight-info-panel/FlightInfoPanel.tsx";

export function Home() {
  return (
    <h1 className={" mx-auto flex justify-between py-10"}>
      <FlightListCard />
      <FlightInfoPanel />
    </h1>
  );
}
