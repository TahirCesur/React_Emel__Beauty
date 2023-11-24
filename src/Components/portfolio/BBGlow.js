import React from "react";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";

function BBGlow() {
  const { t } = useTranslation();

  return (
    <SRLWrapper>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src="assets/img/foto/thumbs/bbglow-1.webp" alt="BB Glow" title="BB Glow" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-description">
                <h2>{t("BB Glow")}</h2>
                <p>
                  {t("Cihazla yapılan yeni nesil bir cilt bakım türüdür.")}
                  <br />
                  {t("Cilt tonunu eşitleyip gözenekleri sıkılaştırır.")}
                  <br />
                  {t("İşlem ortalama süresi 1 saattir.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SRLWrapper>
  );
}

export default BBGlow;
