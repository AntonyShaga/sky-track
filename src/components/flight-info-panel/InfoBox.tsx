interface InfoBoxProps {
  label?: string;
  value: string | React.ReactNode;
  className?: string;
}

export function InfoBox({ label, value, className = "" }: InfoBoxProps) {
  return (
    <div
      className={`flex items-center p-mini-element justify-between bg-neutral-800  ${className}`}
    >
      {label ? <p className="text-gray-400">{label}</p> : null}
      <div>{value}</div>
    </div>
  );
}
