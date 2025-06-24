const FlightInfo = () => {
  return (
    <div className={"flex flex-col gap-y-0.5"}>
      <h3 className={"bg-neutral-700 rounded-t-md  p-1 text-xs"}>
        Flight information
      </h3>
      <div className={"flex flex-row gap-x-0.5 text-xs"}>
        <div className={"bg-neutral-800 flex-1 p-2"}>
          <p>Boeing 737-800</p>
        </div>
        <div className={"flex flex-row bg-neutral-800 flex-1 p-2"}>
          <p>ICON</p>
          <p>Ireland</p>
        </div>
      </div>
      <div className={"flex flex-row gap-x-0.5 text-xs"}>
        <div
          className={
            "flex flex-row bg-neutral-800 rounded-bl-md flex-1 p-2 justify-between"
          }
        >
          <p className={"text-gray-400"}>Speed</p>
          <p>870 km/h</p>
        </div>
        <div
          className={
            "flex flex-row bg-neutral-800 rounded-br-md flex-1 p-2 justify-between"
          }
        >
          <p className={"text-gray-400"}>Altitude</p>
          <p className={"whitespace-nowrap"}>11 300 m</p>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;
