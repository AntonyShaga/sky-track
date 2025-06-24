const Header = () => {
  return (
    <div
      className={
        "flex items-center justify-between w-full bg-amber-500 rounded-lg p-2  mb-20"
      }
    >
      <div>
        <p className={"text-amber-300"}>RN1782</p>
        <p className={"text-xs"}>Ryan air</p>
      </div>
      <div>
        <button>❌</button>
      </div>
    </div>
  );
};

export default Header;
