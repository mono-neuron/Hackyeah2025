import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaRegBell, FaHandsHelping } from "react-icons/fa";
import { CiSearch, CiMoneyBill } from "react-icons/ci";
import { IoPawOutline } from "react-icons/io5";

import useEvents from "../../hooks/useEvents";

const MapHomepage = ({ setSearchView }) => {
  const [loading, events] = useEvents();

  return (
    <div className="p-5">
      <form className="flex items-center justify-center">
        <div className="bg-slate-200 flex items-center w-full py-2 px-3 rounded-tl-xl rounded-bl-xl">
          <CiSearch />
          <input
            type="text"
            className="ml-4 w-full outline-none"
            placeholder="Wyszukaj..."
            onClick={() => {
              setSearchView(true);
            }}
          />
        </div>

        <button className="bg-blue-600 py-3 px-4 ml-3 rounded-tr-xl rounded-br-xl cursor-pointer">
          <FaRegBell color="white" />
        </button>
      </form>
      <h1 className="text-2xl font-semibold my-5">Przeglądaj kategorie</h1>
      <div>
        <div className="flex items-center">
          <div className="p-2 bg-green-400 rounded-4xl m-2">
            <IoPawOutline color="white" size={"1.5em"} />
          </div>
          <h5 className="font-medium">Pomoc w schronisku dla zwierząt</h5>
        </div>
        <div className="flex items-center">
          <div className="p-2 bg-rose-400 rounded-4xl m-2">
            <CiMoneyBill color="white" size={"1.5em"} />
          </div>
          <h5 className="font-medium">Zbiórka pieniędzy</h5>
        </div>
        <div className="flex items-center">
          <div className="p-2 bg-amber-400 rounded-4xl m-2">
            <FaHandsHelping color="white" size={"1.5em"} />
          </div>
          <h5 className="font-medium">Pomoc w domu opieki</h5>
        </div>
      </div>
      <p className="text-center underline my-3">i więcej</p>
      <h1 className="text-2xl font-semibold my-5">Mapa wydarzeń</h1>

      {loading && <h1>Loading</h1>}
      {events && (
        <MapContainer
          className="h-100"
          center={[50.0614, 19.9366]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {events.map((ev, i) => {
            return (
              <Marker
                key={i}
                position={[ev.coordinates.lat, ev.coordinates.lon]}
              >
                <Popup>
                  {ev.title}
                  <br />
                  {ev.organizer}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      )}
    </div>
  );
};

export default MapHomepage;
