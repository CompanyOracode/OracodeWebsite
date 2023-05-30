import { Link } from "react-router-dom";

export const Footer = () => {
  const footertext = [
    {
      id: 2,
      text: "Company.Oracode@gmail.com",
    },

    {
      id: 4,
      text: ["Oracode GbR", <br />, "65366 Geisenheim", <br />, "Behlstraße 2"],
    },

    {
      id: 6,
      text: [<Link>Datenschutz</Link>],
    },
  ];
  const footerUeberschrift = [
    {
      id: 1,
      text: "Kontakt",
    },

    {
      id: 3,
      text: "Impressum",
    },

    {
      id: 5,
      text: "Datenschutz",
    },
  ];
  return (
    <div className="footer">
      <div className="FooterUeberschriften">
        {footerUeberschrift.map((x) => {
          return true ? <div className="FooterInhalt">{x.text}</div> : null;
        })}
      </div>
      <div className="FooterText">
        {footertext.map((x) => {
          return true ? <div className="FooterInhalt">{x.text}</div> : null;
        })}
      </div>
    </div>
  );
};
