import { useNavigate } from "react-router";
import LogoHeader from "../../components/modules/LogoHeader";
import Button from "../../components/ui/Button";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10 grid place-items-center">
      <LogoHeader text="Jak to działa?" color="blue" />
      <h3 className="mt-5 rounded-4xl border border-s-green-500 font-semibold text-green-500 px-5 py-3 inline">
        1
      </h3>
      <p className="my-5">Zakładasz darmowe konto w naszej aplikacji</p>
      <h3 className=" rounded-4xl border border-s-blue-500 font-semibold text-blue-500 px-5 py-3 inline">
        2
      </h3>
      <p className="my-5">
        Wyszukujesz lub tworzysz wydarzenia w twojej okolicy
      </p>
      <h3 className=" rounded-4xl border border-s-rose-500 font-semibold text-rose-500 px-5 py-3 inline">
        3
      </h3>
      <p className="mt-5">Zapisujesz sie na nie jednym kliknięciem</p>
      <h2 className="mb-5 font-bold">...i pomagasz!</h2>
      <Button
        text="Zaloguj się"
        onclick={() => {
          navigate("/logowanie");
        }}
        style="blue"
      />
      <Button
        text="Zarejestruj się"
        onclick={() => {
          navigate("/rejestracja");
        }}
        style="outline-blue"
      />
    </div>
  );
};

export default HomePage;
