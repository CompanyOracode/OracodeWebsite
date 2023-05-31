import { deutschText } from "../textdaten";
export const Startpage = () => {
  return (
    <>
      {deutschText.map((x) => {
        return true ? (
          <div id={x.id} className={`Text${x.id}`}>
            {x.text}
          </div>
        ) : null;
      })}
      ;<div className="Farbverlauf"></div>
    </>
  );
};
