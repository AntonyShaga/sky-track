const Route = () => {
  return (
    <div className={"flex flex-row gap-x-0.5"}>
      <div
        className={
          "flex items-center flex-col gap-x-0.5 p-2 flex-1 text-xs bg-neutral-800 rounded-tl-md"
        }
      >
        <p className={"font-semibold text-3xl"}>CPH</p>
        <p className={"text-sm"}>Dublin</p>
        <p className={"text-gray-400 text-xs"}>UTC+0</p>
      </div>
      <div
        className={
          "flex items-center flex-col gap-x-0.5 p-2 flex-1 text-xs bg-neutral-800 rounded-tr-md"
        }
      >
        <p className={"font-semibold text-3xl"}>LCA</p>
        <p className={"text-sm"}>Larnaca</p>
        <p className={"text-gray-400 text-xs"}>UTC+3</p>
      </div>
    </div>
  );
};

export default Route;
