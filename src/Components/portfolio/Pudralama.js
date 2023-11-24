import React from "react";
import { useTranslation } from "react-i18next";

function Pudralama() {
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
                      src="assets/img/foto/orj/kil-teknigi-kas-islemi.webp"
                      alt="Kıl Tekniği Kaş İşlemi"
                      title="Kıl Tekniği Kaş İşlemi"
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src="assets/img/foto/orj/kil-teknigi-kas-islemi.webp"
                      alt="Kıl Tekniği Kaş İşlemi"
                      title="Kıl Tekniği Kaş İşlemi"
                    />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-description">
                <h2>{t("Kıl Tekniği Kaş İşlemi")}</h2>
                <p>
                  {t("Cihazla yapılan bir işlemdir.")} <br />
                  {t("Kaşa doğal far efekti verir.")} <br />
                  {t("Tüm cilt tipleri için uygundur.")} <br />
                  {t("Kalıcılık süresi 1-2 yıldır.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pudralama;
