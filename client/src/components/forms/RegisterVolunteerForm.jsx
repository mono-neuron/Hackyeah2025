import LogoHeader from "../modules/LogoHeader";
import { Button, Input } from "../ui/index";

const RegisterVolunteerForm = () => {
  return (
    <form className="p-10">
      <LogoHeader text={"Podaj dane"} color={"green"} />
      <Input className={"w-full"} type="text" label={"Imię"} />
      <Input className={"w-full"} type="text" label={"Nazwisko"} />
      <Input className={"w-full"} type="text" label={"Numer telefonu"} />
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
      <Input
        className={"w-full"}
        type="date"
        label={"Data urodzenia"}
        placeholder="dd.mm.rrrr"
      />
      <Input className={"w-full mb-5"} type="select" label={"Szkoła"} />
      <Button text="Zarejestruj konto" style="green" onclick={() => {}} />
    </form>
  );
};

export default RegisterVolunteerForm;
