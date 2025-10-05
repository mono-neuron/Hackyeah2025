const LogoHeader = ({ text, color }) => {
  let style = "w-16 h-1 my-10";
  switch (color) {
    case "blue":
      style += "bg-blue-400";
      break;

    case "green":
      style += "bg-green-400";
      break;

    case "rose":
      style += "bg-rose-400";
      break;
  }
  return (
    <header className=" grid place-items-center">
      <img src="/logo.png" className=" w-30 mt-3" />
      <h1 className="mt-3 text-3xl text-center font-semibold">
        Krakowskie Cyfrowe Centrum Wolontariatu
      </h1>
      <div className={`w-16 h-1 bg-${color}-400 my-10`}></div>
      <h5 className="text-2xl font-semibold">{text}</h5>
    </header>
  );
};

export default LogoHeader;
