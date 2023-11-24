/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>EMEL BEAUTY</h3>
                <p>
                {t("İstasyon Mahallesi")}
                  <br />
                  {t(" Halkalı / İSTANBUL")}
                  <br />
                  {t("TÜRKİYE")} <br />
                  <br />
                  <strong>{t("Gsm")} :</strong> +90
                  <br />
                  <br />
                  <strong>Email :</strong> emelbeauty.com.tr@gmail.com
                  <br />
                </p>
                <br />
                <div className="social-links mt-3">
                  <a
                    href="https://www.instagram.com/makeupstudioemel/"
                    className="instagram"
                    target="_blank"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://www.google.com"
                    className="google"
                    target="_blank"
                  >
                    <i className="bx bxl-google"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>{t("Bağlantılar")}</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/" onClick={scrollToTop}>
                      {t("Anasayfa")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/about" onClick={scrollToTop}>
                      {t("Hakkımda")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/portfolio" onClick={scrollToTop}>
                      {t("Hizmetlerimiz")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/education" onClick={scrollToTop}>
                      {t("Eğitimlerimiz")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/question" onClick={scrollToTop}>
                      {t("Sıkça Sorulan Sorular")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/contact" onClick={scrollToTop}>
                      {t("İletişim")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>{t("Hizmetlerimiz")}</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/Microblading" onClick={scrollToTop}>
                      {t("Microblading")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/Pudralama" onClick={scrollToTop}>
                      {t("Kıl Tekniği Kaş İşlemi")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/EyelineDipliner" onClick={scrollToTop}>
                      {t("Kalıcı Eyeliner-Dipliner")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/DudakRenklendirme" onClick={scrollToTop}>
                      {t("Kalıcı Dudak Renklendirme")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/MakyajSilme" onClick={scrollToTop}>
                      {t("Kalıcı Makyaj Silme İşlemi")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/BBGlow" onClick={scrollToTop}>
                      {t("BB Glow")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/KasKirpik" onClick={scrollToTop}>
                      {t("Kaş-Kirpik Laminasyonu")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>{t("Eğitimlerimiz")}</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/educationmicroblading" onClick={scrollToTop}>
                      {t("Microblading Eğitimi")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/educationeyelinerdipliner" onClick={scrollToTop}>
                      {t("Kalıcı Eyeliner-Dipliner Eğitimi")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link
                      to="/educationdudakrenklendirme"
                      onClick={scrollToTop}
                    >
                      {t("Kalıcı Dudak Renklendirme Eğitimi")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/educationkassilme" onClick={scrollToTop}>
                      {t("Kaş Silme Eğitimi")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/educationkaskirpiklifting" onClick={scrollToTop}>
                      {t("Kaş-Kirpik Lifting Eğitimi")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            <strong>
              <span>Emel Beauty Studio &copy; 2023</span>
            </strong>
            <br />
            {t("Tüm Hakları Saklıdır")}
          </div>
          <div className="credits"></div>
        </div>
      </footer>

      <a
        href="#"
        className="back d-flex align-items-center justify-content-center active"
        title={t("Yukarı Çık")}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* <a
        href="https://wa.me/90"
        title={t("Bize Whatsapptan Ulaşın")}
        target="_blank"
        className="back-to-top d-flex align-items-center justify-content-center active"
      >
        <i className="bx bxl-whatsapp"></i>
      </a> */}
    </>
  );
}

export default Footer;
