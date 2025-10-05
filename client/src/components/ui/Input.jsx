const Input = ({ label, type, placeholder, className }) => {
  const classes =
    "px-3 outline-none py-2  border border-s-slate-600 rounded-xl bg-slate-100 text-slate-600 block " +
    className;
  return (
    <div className="mx-1 ">
      <label htmlFor="" className="block py-2 text-slate-700">
        {label}
      </label>
      {type != "select" ? (
        <input type={type} placeholder={placeholder} className={classes} />
      ) : (
        <select className={classes}></select>
      )}
    </div>
  );
};

export default Input;
