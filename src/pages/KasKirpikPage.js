import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../Components/common/PageHeader";
import KasKirpik from "../Components/portfolio/KasKirpik";
import TopBar from "../Components/common/TopBar";
import Spacer from "../Components/common/Spacer2";

function KasKirpikPage() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Spacer />
      <PageHeader title={t("Kaş - Kirpik Laminasyonu")} />
      <KasKirpik />
    </>
  );
}

export default KasKirpikPage;
