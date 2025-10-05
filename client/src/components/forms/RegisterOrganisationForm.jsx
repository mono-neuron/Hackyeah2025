import LogoHeader from "../modules/LogoHeader";
import { Input, Button } from "../ui/index";

const RegisterOrganisationForm = () => {
  return (
    <form className="p-10">
      <LogoHeader text={"Podaj dane"} color={"blue"} />
      <Input className={"w-full"} label={"Nazwa"} type={"text"} />
      <Input className={"w-full"} label={"Rodzaj"} type={"select"} />
      <Input className={"w-full"} label={"Numer telefonu"} type={"text"} />
      <div className="flex justify-between">
        <Input className={"w-full"} label={"Ulica"} type={"text"} />
        <Input className={"w-20"} label={"Nr domu"} type={"text"} />
        <Input className={"w-10"} label={"lokalu"} type={"text"} />
      </div>
      <div className=" flex">
        <Input
          className={"w-30"}
          label={"Kod pocztowy"}
          type={"text"}
          placeholder={"00-000"}
        />
        <Input className={"w-full mb-5"} label={"Miasto"} type={"text"} />
      </div>

      <Button text="Zarejestruj konto" style="blue" onclick={() => {}} />
    </form>
  );
};

export default RegisterOrganisationForm;
