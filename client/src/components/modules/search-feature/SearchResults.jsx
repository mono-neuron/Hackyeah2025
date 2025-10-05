import { useNavigate, useParams } from "react-router";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

import { SearchFilters, SearchResultsList } from "./index";

import { useState } from "react";

const searchResults = () => {
  const { search } = useParams();
  const [newSearch, setNewSearch] = useState(search);
  const navigate = useNavigate();

  return (
    <>
      <div className="p-5">
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-600 py-3 px-4 mr-3 rounded-tl-xl rounded-bl-xl cursor-pointer"
            onClick={(ev) => {
              ev.preventDefault();
              navigate("/");
            }}
          >
            <IoIosArrowBack color="white" />
          </button>
          <div className="bg-slate-200 flex items-center w-full py-2 px-3 rounded-tr-xl rounded-br-xl">
            <CiSearch />
            <input
              type="text"
              className="ml-4 w-full outline-none font-light"
              value={newSearch}
              onChange={(ev) => {
                setNewSearch(ev.target.value);
              }}
              autoFocus
              placeholder="Wyszukaj..."
              onKeyDown={(ev) => {
                if (ev.key != "Enter") return;
                navigate(`/wyszukiwanie/${ev.target.value}`);
              }}
            />
          </div>
        </div>
        <div className="mt-2">
          <button className="w-1/2 p-1 border-b-blue-700 border-b-2 cursor-pointer font-semibold">
            Wydarzenia
          </button>
          <button className="w-1/2 cursor-pointer">Organizacje</button>
        </div>

        <SearchFilters />
      </div>
      <SearchResultsList searchPhrase={search} />
    </>
  );
};

export default searchResults;
