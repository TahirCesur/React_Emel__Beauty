import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../Components/common/PageHeader";
import MakyajSilme from "../Components/portfolio/MakyajSilme";
import TopBar from "../Components/common/TopBar";
import Spacer from "../Components/common/Spacer2";

function MakyajSilmePage() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Spacer />
      <PageHeader title={t("Kalıcı Makyaj Silme")} />
      <MakyajSilme />
    </>
  );
}

export default MakyajSilmePage;
