import React from "react";
import { useTranslation } from "react-i18next";

const KasKirpik = () => {
  const { t } = useTranslation();

  return (
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img
                    src="assets/img/foto/orj/kas-kirpik-laminasyon-1.webp"
                    alt="Kaş Kirpik Laminasyon"
                    title="Kaş Kirpik Laminasyon"
                  />
                </div>

                <div className="swiper-slide">
                  <img
                    src="assets/img/foto/orj/kas-kirpik-laminasyon-2.webp"
                    alt="Kaş Kirpik Laminasyon"
                    title="Kaş Kirpik Laminasyon"
                  />
                </div>

                <div className="swiper-slide">
                  <img
                    src="assets/img/foto/orj/kas-kirpik-laminasyon-3.webp"
                    alt="Kaş Kirpik Laminasyon"
                    title="Kaş Kirpik Laminasyon"
                  />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="portfolio-description">
              <h2>{t("Kaş - Kirpik Laminasyonu")}</h2>
              <p>
                {t("Doğal içerikli ve su bazlıdır.")}
                <br />
                {t(
                  "Keratin solüsyonlarıyla kaş ve kirpiği besleyen aynı zamanda şekil veren doğal bir işlemdir."
                )}
                <br />
                {t("Kullanım ömrü 8-10 haftadır.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KasKirpik;
