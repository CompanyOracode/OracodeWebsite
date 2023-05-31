import Navbar from "./navbar";
import { StartPageEnglish } from "./StartPageEnglish";
import { Footer } from "./footer";
import Logos from "./Logos";
import CarouselDiv from "./Carousel";
import ScrollButton from "./ScrollButton";

export const HomeEnglish = () => {
  return (
    <>
      <Navbar />
      <StartPageEnglish />
      <Footer />
      <Logos />
      <CarouselDiv />
      <ScrollButton />
    </>
  );
};
