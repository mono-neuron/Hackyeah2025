import { useNavigate } from "react-router";
import LogoHeader from "../modules/LogoHeader";
import { Button, Input } from "../ui/index";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <form className="p-10">
      <LogoHeader text="Zaloguj się" color="blue" />
      <Input className={"w-full"} label="Email" type="text" placeholder="" />
      <Input
        className={"w-full mb-5"}
        label="Hasło"
        type="password"
        placeholder=""
      />
      <Button
        text="Zaloguj się"
        style="blue"
        onclick={(ev) => {
          ev.preventDefault();
          console.log("zalogowano");
        }}
      />
      <p className="text-center mt-5">Nie masz konta?</p>
      <p
        onClick={() => {
          navigate("/rejestracja");
        }}
        className="text-center cursor-pointer mt-2 underline"
      >
        Zarejestruj się
      </p>
    </form>
  );
};

export default LoginForm;
