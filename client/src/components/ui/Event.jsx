import { Button, Category } from "./index";

const Event = ({ data, buttons }) => {
  return (
    <div className="p-5 bg-white border border-s-slate-300 cursor-pointer rounded-xl my-5 text-slate-300">
      <h1 className="text-xl font-semibold text-slate-700">{data.title}</h1>
      <h2 className="my-4 text-slate-700">{data.organizer}</h2>
      <Category text={data.category} />
      <p className="mt-4 text-slate-700">
        Od <span className="font-semibold">{data.start} </span>
        do <span className="font-semibold">{data.end} </span>
      </p>

      {buttons && (
        <div className="flex py-1">
          <Button text={"Zapisz się"} style={"blue"} onclick={() => {}} />
          <Button text={"Wyślij wiadomość"} style={"rose"} onclick={() => {}} />
        </div>
      )}
    </div>
  );
};

export default Event;
