import React from "react";
import PageHeader from "../Components/common/PageHeader";
import BBGlow from "../Components/portfolio/BBGlow";
import TopBar from "../Components/common/TopBar";
import Spacer from "../Components/common/Spacer2";

function BBGlowPage() {
  return (
    <>
      <TopBar />
      <Spacer />
      <PageHeader title="BB Glow" />
      <BBGlow />
    </>
  );
}

export default BBGlowPage;
