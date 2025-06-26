interface Props {
  flightNumber: string;
  airline: string;
}
export function Header({ flightNumber, airline }: Props) {
  return (
    <div
      className={
        "flex items-center justify-between w-full bg-amber-500 rounded-lg p-2  mb-20"
      }
    >
      <div>
        <p className={"text-amber-300"}>{flightNumber}</p>
        <p className={"text-xs"}>{airline}</p>
      </div>
      <div>
        <button>❌</button>
      </div>
    </div>
  );
}
