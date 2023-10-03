import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import About2Page from "../pages/About2Page";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import QuestionPage from "../pages/QuestionPage";
import BBGlowPage from "../pages/BBGlowPage";
import DuadakRenklendirmePage from "../pages/DuadakRenklendirmePage";
import KasKirpikPage from "../pages/KasKirpikPage";
import MicrobladingPage from "../pages/MicrobladingPage";
import PudralamaPage from "../pages/PudralamaPage";
import EyelineDiplinerPage from "../pages/EyelineDiplinerPage";
import MakyajSilmePage from "../pages/MakyajSilmePage";
import EducationEyelinerDiplinerPage from "../pages/EducationEyelinerDiplinerPage";
import EducationMicrobladingPage from "../pages/EducationMicrobladingPage";
import EducationKasSilmePage from "../pages/EducationKasSilmePage";
import EducationKasKirpikLiftingPage from "../pages/EducationKasKirpikLiftingPage";
import EducationDudakRenklendirmePage from "../pages/EducationDudakRenklendirmePage";
import EducationPage from "../pages/EducationPage";
import PortfolioPage from "../pages/PortfolioPage";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/EducationDudakRenklendirme"
        element={<EducationDudakRenklendirmePage />}
      />
      <Route
        path="/EducationKasKirpikLifting"
        element={<EducationKasKirpikLiftingPage />}
      />
      <Route path="/EducationKasSilme" element={<EducationKasSilmePage />} />
      <Route path="/EducationMicroblading" element={<EducationMicrobladingPage />} />
      <Route
        path="/EducationEyelinerDipliner"
        element={<EducationEyelinerDiplinerPage />}
      />
      <Route path="/Education" element={<EducationPage />} />
      <Route path="/MakyajSilme" element={<MakyajSilmePage />} />
      <Route path="/EyelineDipliner" element={<EyelineDiplinerPage />} />
      <Route path="/Pudralama" element={<PudralamaPage />} />
      <Route path="/Microblading" element={<MicrobladingPage />} />
      <Route path="/KasKirpik" element={<KasKirpikPage />} />
      <Route path="/DudakRenklendirme" element={<DuadakRenklendirmePage />} />
      <Route path="/BBGlow" element={<BBGlowPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Question" element={<QuestionPage />} />
      <Route path="/About2" element={<About2Page/>} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Portfolio" element={<PortfolioPage/>} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
