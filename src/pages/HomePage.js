import React from "react";
import About from "../Components/about/About";
import Contact from "../Components/contact/Contact";
import Slider from "../Components/common/Slider";
import Hizmet from "../Components/portfolio/Portfolio";
import Sorular from "../Components/question/Question";
import Egitim from "../Components/education/Education";
import TopBar from "../Components/common/TopBar";

function HomePage() {
  return (
    <>
      <TopBar />
      <Slider />
      <About />
      <Hizmet />
      <Egitim />
      <Sorular />
      <Contact />
    </>
  );
}

export default HomePage;
