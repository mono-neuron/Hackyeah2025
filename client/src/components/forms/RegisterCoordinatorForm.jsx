import LogoHeader from "../modules/LogoHeader";
import { Input, Button } from "../ui/index";

const RegisterCoordinatorForm = () => {
  return (
    <form className="p-10">
      <LogoHeader text={"Podaj dane"} color={"rose"} />
      <Input className={"w-full"} type="text" label={"Imię"} />
      <Input className={"w-full"} type="text" label={"Nazwisko"} />
      <Input className={"w-full mb-5"} type="text" label={"Numer telefonu"} />
      <Button text={"Zarejestruj konto"} style={"rose"} onclick={() => {}} />
    </form>
  );
};

export default RegisterCoordinatorForm;
