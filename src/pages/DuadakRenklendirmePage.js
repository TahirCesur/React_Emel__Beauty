import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../Components/common/PageHeader";
import DuadakRenklendirme from "../Components/portfolio/DuadakRenklendirme";
import TopBar from "../Components/common/TopBar";
import Spacer from "../Components/common/Spacer2";

function DuadakRenklendirmePage() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Spacer />
      <PageHeader title={t("Kalıcı Dudak Renklendirme")} />
      <DuadakRenklendirme />
    </>
  );
}

export default DuadakRenklendirmePage;
