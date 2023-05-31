import Navbar from "./navbar";
import { Startpage } from "./StartPage";
import { Footer } from "./footer";
import Logos from "./Logos";
import ScrollButton from "./ScrollButton";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Startpage />
      <Footer />
      <Logos />
      <ScrollButton />
    </>
  );
};
