import React from "react";
import { useTranslation } from "react-i18next";

function MakyajSilme() {
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
                    <img src="assets/img/foto/thumbs/makyajsilme.webp" alt="Makyaj Silme" title="Makyaj Silme"/>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-description">
                <h2>{t("Kalıcı Makyaj Silme")}</h2>
                <p>
                  {t("Cihazla ve solüsyon yardımıyla yapılan bir işlemdir.")}
                  <br />
                  {t(
                    "Olumsuz kalıcı makyaj işlemlerinizi cihaz ve solüsyon yardımıyla güvenle sildirebilirsiniz."
                  )}
                  <br />
                  {t("Ağrı-acı minimumdur.")}
                  <br />
                  {t(
                    "İşlem süresi bölgenin büyüklüğüne göre değişebilir. Ortalama 1 saattir."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MakyajSilme;
