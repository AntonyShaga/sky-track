import FlightInfo from "./FlightInfo.tsx";
import Header from "./Header.tsx";
import Route from "./Route.tsx";
import Progress from "./Progress.tsx";

const FlightInfoPanel = () => {
  return (
    <div className={"bg-neutral-900 rounded-lg w-xs box-border h-fit"}>
      <Header />
      <div className={" p-5 "}>
        <Route />
        <Progress />
        <FlightInfo />
      </div>
    </div>
  );
};

export default FlightInfoPanel;
