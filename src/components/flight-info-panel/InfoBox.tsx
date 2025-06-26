interface InfoBoxProps {
  label?: string;
  value: string | React.ReactNode;
  className?: string;
}

export function InfoBox({ label, value, className = "" }: InfoBoxProps) {
  return (
    <div
      className={`flex items-center bg-neutral-800 p-2 text-xs flex-1 ${className}`}
    >
      {label ? (
        <div className="flex justify-between w-full">
          <p className="text-gray-400">{label}</p>
          <p className="whitespace-nowrap">{value}</p>
        </div>
      ) : (
        value
      )}
    </div>
  );
}
