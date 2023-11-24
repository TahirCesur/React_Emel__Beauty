import React from "react";
import { useTranslation } from "react-i18next";

function Microblading() {
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
                    <img src="assets/img/foto/orj/microblading-1.webp" alt="Microblading" title="Microblading"/>
                  </div>

                  <div className="swiper-slide">
                    <img src="assets/img/foto/orj/microblading-2.webp" alt="Microblading" title="Microblading" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-description">
                <h2>{t("Microblading")}</h2>
                <p>
                  {t("Manuel olarak yapılan kıl tekniğidir.")} <br />
                  {t(
                    "Kendi kaş kıl renginiz ile orantılı olarak, kaş yönünüze doğru kıl atımları (çizimleri) yapılarak çalışılır."
                  )}{" "}
                  <br />
                  {t(
                    "Kendi kaşlarınızdan ayırt edemeyeceğiniz doğallıkta bir dörünüm sağlar."
                  )}{" "}
                  <br />
                  {t("Kalıcılık cilt tipine göre değişir.")} <br />
                  {t("Ortalama süresi 1-2 yıldır.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Microblading;
