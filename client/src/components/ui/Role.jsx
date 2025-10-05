const Role = ({ text, color }) => {
  let roleStyle = "inline pb-1 m-1 px-3 rounded-4xl font-semibold";
  switch (color) {
    case "green":
      roleStyle += " bg-green-100 text-green-500 border border-green-500 ";
      break;
    case "blue":
      roleStyle += " bg-blue-100 text-blue-500 border border-blue-500  ";
      break;
    case "rose":
      roleStyle += " bg-rose-100 text-rose-500 border border-rose-500  ";
      break;
    case "amber":
      roleStyle += " bg-amber-100 text-amber-500 border border-amber-500 ";
      break;
  }
  return (
    <div className={roleStyle}>
      <p>{text}</p>
    </div>
  );
};

export default Role;
