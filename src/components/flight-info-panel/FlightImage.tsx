export function FlightImage({
  flightImg,
  airline,
}: {
  flightImg: string;
  airline: string;
}) {
  return (
    <div className={"w-full h-72 pt-28"} style={{}}>
      <img
        className={"max-w-[95%] h-auto mx-auto"}
        src={flightImg}
        alt={airline}
      />
    </div>
  );
}
