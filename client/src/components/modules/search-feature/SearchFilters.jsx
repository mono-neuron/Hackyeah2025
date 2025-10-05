import { IoIosArrowDown } from "react-icons/io";

const SearchFilters = () => {
  return (
    <div className="flex items-center justify-between mt-3">
      <p>Filtruj</p>
      <div className=" py-2 px-3 rounded-xl  bg-blue-200 text-slate-600 border border-slate-600 flex justify-between items-center">
        <p className="pr-3">Kategoria</p>
        <IoIosArrowDown />
      </div>
      <div className=" py-2 px-3 rounded-xl  bg-white text-slate-600 border border-slate-600 flex justify-between items-center">
        <p className="pr-3">Ograniczenie wiekowe</p>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default SearchFilters;
