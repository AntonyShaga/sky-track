export function FlightActionButton({
  className,
  value,
}: {
  className?: string;
  value: string;
}) {
  return (
    <button
      className={`flex flex-col items-center gap-2 p-mini-element transition-colors bg-neutral-800 hover:bg-neutral-800/70 ${className}`}
    >
      IMG
      <span>{value}</span>
    </button>
  );
}
