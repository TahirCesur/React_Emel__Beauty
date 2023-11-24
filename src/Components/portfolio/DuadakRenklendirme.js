import React from "react";
import { useTranslation } from "react-i18next";

function DuadakRenklendirme() {
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
                      src="assets/img/foto/thumbs/dudak-renklendirme-1.webp"
                      alt="Dudak Renklendirme"
                      title="Dudak Renklendirme"
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src="assets/img/foto/thumbs/dudak-renklendirme-2.webp"
                      alt="Dudak Renklendirme"
                      title="Dudak Renklendirme"
                    />
                  </div>

                  <div className="swiper-slide">
                    <img
                      src="assets/img/foto/thumbs/dudak-renklendirme-3.webp"
                      alt="Dudak Renklendirme"
                      title="Dudak Renklendirme"
                    />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-description">
                <h2>{t("Kalıcı Dudak Renklendirme")}</h2>
                <p>
                  {t("Amaç zamanla kaybolmuş dudak pigmentini geri kazandırmaktır.")}
                  <br />
                  {t("Daha yoğun veya daha soft yapılabilir.")}
                  <br />
                  {t("Uzmanla birlikte en doğru işlem seçilmelidir.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DuadakRenklendirme;
