import { englishText } from "../textdaten";
export const StartPageEnglish = () => {
  return (
    <>
      {englishText.map((x) => {
        return true ? (
          <div id={x.id} className={`Text${x.id}`}>
            {x.text}
          </div>
        ) : null;
      })}
      <div className="Farbverlauf"></div>
    </>
  );
};
