import { FaUserNinja } from "react-icons/fa";
import { Role, Event } from "../../components/ui/index";

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center mt-5 items-center">
        <FaUserNinja size={"6em"} className="m-7" />
        <div className="">
          <h1 className="m-1 text-4xl">Jan Kowalski</h1>
          <div className="flex flex-wrap">
            <Role text={"Nowy użytkownik"} color={"green"} />
            <Role text={"Pełnoletni"} color={"blue"} />
            <Role text={"Aktywny wolontariusz"} color={"rose"} />
          </div>
        </div>
      </div>

      <div className="flex justify-around border-b border-b-slate-300 border-s-slate-300 mt-2">
        <button className="cursor-pointer border-b-2 border-b-blue-500 border-s-blue-500 py-2 px-8">
          Wydarzenia
        </button>
        <button className="cursor-pointer py-2 px-8">Zaświadczenia</button>
        <button className="cursor-pointer py-2 px-8">Opinie</button>
      </div>

      <h1 className=" text-center p-4 pb-0 text-xl font-semibold">
        Najbliższe wydarzenia w których bierzesz udział
      </h1>

      <div className="p-5 pb-15">
        <Event
          data={{
            title: "Example text",
            organizer: "Example author",
            category: "pomoc",
            start: "10.10.2025 18:00",
            end: "17.10.2025 12:00",
          }}
          buttons={false}
        />
        <Event
          data={{
            title: "Example text",
            organizer: "Example author",
            category: "schronisko",
            start: "10.10.2025 18:00",
            end: "17.10.2025 12:00",
          }}
          buttons={false}
        />
        <Event
          data={{
            title: "Example text",
            organizer: "Example author",
            category: "zbiórka",
            start: "10.10.2025 18:00",
            end: "17.10.2025 12:00",
          }}
          buttons={false}
        />
      </div>
    </div>
  );
};
export default Profile;
