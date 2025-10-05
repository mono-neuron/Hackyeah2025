import useEvents from "../../../hooks/useEvents";
import { Event } from "../../ui/index";

const SearchResultsList = ({ searchPhrase }) => {
  const [loading, events] = useEvents();

  const filteredEvents = events.filter(
    (ev) =>
      ev.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      ev.organizer.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      ev.category.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <>
      {loading && <h1>Loading</h1>}
      {events && (
        <ul className="bg-slate-200 p-5 h-full">
          {filteredEvents.length == 0 && !loading ? (
            <h1 className="p-5 text-2xl text-center">
              Brak wyników dla wyszkuwiania {searchPhrase}
            </h1>
          ) : (
            filteredEvents.map((ev, i) => {
              return <Event key={i} data={ev} buttons={true} />;
            })
          )}
        </ul>
      )}
    </>
  );
};

export default SearchResultsList;
