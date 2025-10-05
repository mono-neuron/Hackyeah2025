const Button = ({ text, onclick, style }) => {
  let btnStyle = "w-full m-1 cursor-pointer  py-2 rounded-xl font-semibold";
  switch (style) {
    case "green":
      btnStyle += " bg-green-500 text-white ";
      break;
    case "blue":
      btnStyle += " bg-blue-500 text-white ";
      break;
    case "rose":
      btnStyle += " bg-rose-500 text-white ";
      break;
    case "outline-green":
      btnStyle += " border border-s-green-500 text-green-500 ";
      break;
    case "outline-blue":
      btnStyle += " border border-s-blue-500 text-blue-500 ";
      break;
    case "outline-rose":
      btnStyle += " border border-s-rose-500 text-rose-500 ";
      break;
  }
  return (
    <button
      onClick={(ev) => {
        ev.preventDefault();
        onclick();
      }}
      className={btnStyle}
    >
      {text}
    </button>
  );
};

export default Button;
