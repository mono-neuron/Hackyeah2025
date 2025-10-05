const Category = ({ text }) => {
  let categoryStyle = "inline pb-1 px-3 rounded-4xl font-semibold";
  switch (text) {
    case "schronisko":
      categoryStyle += " bg-green-100 text-green-500 border border-green-500 ";
      break;
    case "zbiórka":
      categoryStyle += " bg-blue-100 text-blue-500 border border-blue-500  ";
      break;
    case "pomoc":
      categoryStyle += " bg-rose-100 text-rose-500 border border-rose-500  ";
      break;
    case "test":
      categoryStyle += " bg-amber-100 text-amber-500 border border-amber-500 ";
      break;
  }
  return <div className={categoryStyle}>{text}</div>;
};

export default Category;
