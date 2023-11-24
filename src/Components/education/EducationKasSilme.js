/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function EducationKasSilme() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="departments" className="departments">
      <div className="container">
        <div className="section-title">
          <h2>{t("EĞİTİMLERİMİZ")}</h2>
        </div>

        <div className="row gy-4">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/educationmicroblading"
                  onClick={scrollToTop}
                >
                  {t("Microblading ve Pudralama Tekniği Eğitimi")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/educationeyelinerdipliner"
                  onClick={scrollToTop}
                >
                  {t("Kalıcı Eyeliner - Dipliner Eğitimi")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/educationdudakrenklendirme"
                  onClick={scrollToTop}
                >
                  {t("Kalıcı Dudak Renklendirme Eğitimi")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active show"
                  to="/educationkassilme"
                  onClick={scrollToTop}
                >
                  {t("Kaş Silme Eğitimi")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/educationkaskirpiklifting"
                  onClick={scrollToTop}
                >
                  {t("Kaş - Kirpik Lifting Eğitimi")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              <div className="tab-pane" id="tab-1">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>{t("Microblading ve Pudralama Tekniği Eğitimi")}</h3>
                    <ul className="departmentsegitim">
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Cilt Anatomisi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Pigment Bilgisi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Altın Oran Tasarım")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Lateks Çalışması")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Cihaz ve İğne Bilgisi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Canlı Model Uygulaması")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Eğitim Sonrası Destek")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Sertifika")}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/foto/thumbs/microblading-2.webp"
                      alt="Microblading"
                      title="Microblading"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>{t("Kalıcı Eyeliner - Dipliner Eğitimi")}</h3>
                    <ul className="departmentsegitim">
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Teorik Bilgi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Malzeme Bilgisi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Cilt Bilgisi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Lateks Çalışması")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Canlı Model Uygulaması")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Eğitim Sonrası Destek")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Sertifika")}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/foto/thumbs/eyeliner-dipliner.webp"
                      alt="Kalıcı Eyeliner"
                      title="Kalıcı Eyeliner"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>{t("Kalıcı Dudak Renklendirme Eğitimi")}</h3>
                    <ul className="departmentsegitim">
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Teorik Bilgi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Malzeme Bilgisi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Lateks Çalışması")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Canlı Model Uygulaması")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Eğitim Sonrası Destek")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Sertifika")}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/foto/thumbs/dudak-renklendirme-2.webp"
                      alt="Dudak Renklendirme"
                      title="Dudak Renklendirme"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane active show" id="tab-4">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>{t("Kaş Silme Eğitimi")}</h3>
                    <ul className="departmentsegitim">
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Teorik Bilgi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Malzeme Bilgisi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Cilt Analizi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Lateks Çalışması")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Canlı Model Uygulaması")}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/foto/thumbs/kas-kirpik-laminasyon-1.webp"
                      alt="Kaş Silme"
                      title="Kaş Silme"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>{t("Kaş - Kirpik Lifting Eğitimi")}</h3>
                    <ul className="departmentsegitim">
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Teorik Bilgi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Malzeme Bilgisi")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Canlı Model Uygulaması")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Eğitim Sonrası Destek")}
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        {t("Sertifika")}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/foto/thumbs/kas-kirpik-lifting-1.webp"
                      alt="Kaş Kirpik Lifting"
                      title="Kaş Kirpik Lifting"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationKasSilme;
