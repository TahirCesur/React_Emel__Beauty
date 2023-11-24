import React from "react";
import { useTranslation } from "react-i18next";

function EyelineDipliner() {
  const { t } = useTranslation();

  return (
    <>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img
                      src="assets/img/foto/orj/eyeliner-dipliner.webp"
                      alt={t("Kalıcı Eyeliner - Dipliner")}
                      title="Kalıcı Eyeliner - Dipliner"
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src="assets/img/foto/orj/eyeliner-dipliner.webp"
                      alt={t("Kalıcı Eyeliner - Dipliner")}
                      title="Kalıcı Eyeliner - Dipliner"
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src="assets/img/foto/orj/eyeliner-dipliner.webp"
                      alt={t("Kalıcı Eyeliner - Dipliner")}
                      title="Kalıcı Eyeliner - Dipliner"
                    />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-description">
                <h2>{t("Kalıcı Eyeliner - Dipliner")}</h2>
                <p>
                  {t("İşlem öncesinde önçizim yapılır.")}
                  <br />
                  {t("Tamamen göz şeklinize en uygun model tavsiye edilir.")}
                  <br />
                  {t("Dipliner sadece kirpik diplerine uygulanır.")}
                  <br />
                  {t(
                    "Eyeliner ise göz şeklinize en uygun kuyruklu ve belirgin bir şekilde yapılır."
                  )}
                  <br />
                  {t("Çeşitleri vardır. Göz şekline ve isteğe göre yapılır.")}
                  <br />
                  {t("Kalıcılık süresi ortalama 3-5 yıldır.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EyelineDipliner;
