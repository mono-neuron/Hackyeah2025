import { useNavigate } from "react-router";
import LogoHeader from "../modules/LogoHeader";
import { Button, Input } from "../ui/index";

const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <form className="p-10">
      <LogoHeader text="Utwórz konto" color={"blue"} />
      <Input className={"w-full"} type={"text"} label={"Email"} />
      <Input className={"w-full"} type={"password"} label={"Hasło"} />
      <Input className={"w-full"} type={"password"} label={"Powtórz hasło"} />
      <h1 className=" text-3xl my-5 text-center">Jestem...</h1>
      <Button
        text={"Wolontariuszem"}
        onclick={() => {
          navigate("/rejestracja/wolontariusz");
        }}
        style={"green"}
      />
      <Button
        text={"Organizacją"}
        onclick={() => {
          navigate("/rejestracja/organizacja");
        }}
        style={"blue"}
      />
      <Button
        text={"Koordynatorem"}
        onclick={() => {
          navigate("/rejestracja/koordynator");
        }}
        style={"rose"}
      />
    </form>
  );
};

export default RegisterForm;
