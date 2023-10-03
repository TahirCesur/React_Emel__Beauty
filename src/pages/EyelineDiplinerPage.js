import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../Components/common/PageHeader";
import EyelineDipliner from "../Components/portfolio/EyelineDipliner";
import TopBar from "../Components/common/TopBar";
import Spacer from "../Components/common/Spacer2";

function EyelineDiplinerPage() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Spacer />
      <PageHeader title={t("Kalıcı Eyeliner Dipliner")} />
      <EyelineDipliner />
    </>
  );
}

export default EyelineDiplinerPage;
