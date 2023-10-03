import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../Components/common/PageHeader";
import Microblading from "../Components/portfolio/Microblading";
import TopBar from "../Components/common/TopBar";
import Spacer from "../Components/common/Spacer2";

function MicrobladingPage() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Spacer />
      <PageHeader title={t("Microblading")} />
      <Microblading />
    </>
  );
}

export default MicrobladingPage;
