import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../Components/common/PageHeader";
import Pudralama from "../Components/portfolio/Pudralama";
import TopBar from "../Components/common/TopBar";
import Spacer from "../Components/common/Spacer2";

function PudralamaPage() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Spacer />
      <PageHeader title={t("Kıl Tekniği Kaş İşlemi")} />
      <Pudralama />
    </>
  );
}

export default PudralamaPage;
