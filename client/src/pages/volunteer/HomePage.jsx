import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

import { useState } from "react";
import MapHomepage from "../../components/modules/MapHomepage";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [searchView, setSearchView] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {searchView ? (
        <div className="p-5">
          <form className="flex items-center justify-center">
            <button
              className="bg-blue-600 py-3 px-4 mr-3 rounded-tl-xl rounded-bl-xl cursor-pointer"
              onClick={(ev) => {
                ev.preventDefault();
                setSearchView(false);
              }}
            >
              <IoIosArrowBack color="white" />
            </button>
            <div className="bg-slate-200 flex items-center w-full py-2 px-3 rounded-tr-xl rounded-br-xl">
              <CiSearch />
              <input
                type="text"
                className="ml-4 w-full outline-none"
                autoFocus
                placeholder="Wyszukaj..."
                onKeyDown={(ev) => {
                  if (ev.key != "Enter") return;
                  navigate(`/wyszukiwanie/${ev.target.value}`);
                }}
              />
            </div>
          </form>
          <div className="mt-2">
            <button className="w-1/2 p-1 border-b-blue-700 border-b-2 cursor-pointer font-semibold">
              Wydarzenia
            </button>
            <button className="w-1/2 cursor-pointer">Organizacje</button>
          </div>
          <h1 className="text-center mt-20 text-3xl p-10">
            Szukaj wydarzeń i organizacji
          </h1>
        </div>
      ) : (
        <MapHomepage setSearchView={(txt) => setSearchView(txt)} />
      )}
    </>
  );
};

export default HomePage;
