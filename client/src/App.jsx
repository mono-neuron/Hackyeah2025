import { Routes, Route, Navigate } from "react-router";
import Navbar from "./components/modules/Navbar";
import Guest from "./pages/guest/index";
import Volunteer from "./pages/volunteer/index";
import Coordinator from "./pages/coordinator/index";

import { SearchResults } from "./components/modules/search-feature";

import {
  LoginForm,
  RegisterForm,
  RegisterCoordinatorForm,
  RegisterVolunteerForm,
  RegisterOrganisationForm,
} from "./components/forms";

function App() {
  let homepage = "";
  let navbarLinks = [];
  let user = "volunteer";
  switch (user) {
    case "admin":
      homepage = "Admin HomePage";
      navbarLinks = ["Strona główna", "Profil", "Czaty", "Kalendarz"];
      break;

    case "volunteer":
      homepage = <Volunteer.HomePage />;
      navbarLinks = ["Strona główna", "Profil", "Czaty", "Kalendarz"];
      break;

    case "organisation":
      homepage = "Organisation HomePage";
      navbarLinks = ["Strona główna", "Profil", "Czaty", "Kalendarz"];
      break;

    case "coordinator":
      homepage = <Coordinator.HomePage />;
      navbarLinks = ["Strona główna", "Profil", "Czaty", "Kalendarz"];
      break;

    default:
      homepage = <Guest.HomePage />;
      navbarLinks = [];
      break;
  }
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/"} replace />} />
      <Route
        path="/logowanie"
        element={!user ? <LoginForm /> : <Navigate to={"/"} replace />}
      />
      {!user && (
        <Route path="/rejestracja">
          <Route index element={<RegisterForm />} />
          <Route path="wolontariusz" element={<RegisterVolunteerForm />} />
          <Route path="organizacja" element={<RegisterOrganisationForm />} />
          <Route path="koordynator" element={<RegisterCoordinatorForm />} />
        </Route>
      )}
      {user && user !== "organisation" && (
        <>
          <Route path="/wyszukiwanie/:search" element={<SearchResults />} />
        </>
      )}
      <Route element={<Navbar links={navbarLinks} />}>
        <Route path="/" element={homepage} />
        {user && user !== "organisation" && (
          <Route path="/profil" element={<Volunteer.Profile />} />
        )}
      </Route>
    </Routes>
  );
}

export default App;
