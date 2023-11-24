/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Slider() {
  const [toggler, setToggler] = useState(false);
  const { t } = useTranslation();

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="fonts text-center">
              {t("Kalıcı")}
              <span>&nbsp;</span>
              {t("Makyaj İşlemleri")}
            </h1>

            <div className="d-flex justify-content-center justify-content-lg-center">
              <Link
                to="/portfolio"
                className="btn-get-started nav-link scrollto"
              >
                {t("Başlayın")}
              </Link>

              <Link
                onClick={() => setToggler(!toggler)}
                className="glightbox btn-watch-video"
              >
                <i className="bi bi-play-circle"></i>
                <span>{t("İzleyin")}</span>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="assets/img/banner.png"
              className="img-fluid animated"
              alt="Banner"
              title="Banner"
              width={"100%"}
              height={"auto"}
            />
          </div>
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/lCg3tSDSB8c"]}
      />
    </section>
  );
}

export default Slider;
