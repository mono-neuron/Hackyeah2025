import { NavLink, Outlet } from "react-router";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

const Navbar = ({ links }) => {
  const getIcon = (name, type) => {
    switch (name) {
      case "Strona główna":
        return <IoHomeOutline size="1.5em" color="#1e40af" />;
      case "Profil":
        return <IoPersonOutline size="1.5em" color="#1e40af" />;
      case "Czaty":
        return <IoChatbubblesOutline size="1.5em" color="#1e40af" />;
      case "Kalendarz":
        return <CiCalendarDate size="1.5em" color="#1e40af" />;
    }
  };
  return (
    <>
      <Outlet />
      {links.length > 0 && (
        <nav className="flex items-center justify-around fixed bottom-0 w-full border-s-blue-800 border text-blue-800 p-2 bg-white">
          {links.map((text, i) => {
            return (
              <NavLink
                key={i}
                className="grid place-items-center"
                to={text == "Strona główna" ? "/" : "/" + text.toLowerCase()}
              >
                {getIcon(text, "typ")}
                <p className="text-xs text-blue-800">{text}</p>
              </NavLink>
            );
          })}
        </nav>
      )}
    </>
  );
};

export default Navbar;
