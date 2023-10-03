/* eslint-disable no-unreachable */
import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("HAKKIMDA")}</h2>
        </div>

        <div className="row content">
          <div className="col-lg-5 pt-4 pt-lg-0">
            <table className="">
              <tbody>
                <tr>
                  <td>
                    <img
                      src="assets/img/foto/orj/hakkimda.webp"
                      className="img-fluid"
                      alt="Hakkımda"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-7">
            <p>
              {t("Merhaba ben")}
              <strong style={{ color: "#f7b789" }}> Emel ÇELİK KÜÇÜK , </strong>
              <br />
              {t(
                "2016 da Lisans eğitimimi tamamladıktan sonra meslek hayatıma 2018 yılında Güzellik Uzmanı olarak başladım."
              )}
              <br />
              {t(
                "Daha sonra kalıcı makyaj eğitimlerimi tamamlayarak mesleki donanımımı artırdım."
              )}
              <br />
              {t(
                "Farklı teknik ve eğitimlerle de kendimi geliştirmeye devam ettim..."
              )}
            </p>
            <strong style={{ color: "#f7b789" }}>
              {t("Sahip Olduğum Sertifika ve Eğitimler")}
            </strong>
            <br />
            <br />
            <ul>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Microblading Eğitimi")}
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Kaş-Kirpik Laminasyon Eğitimi")}
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Kalıcı Eyeliner - Dipliner Eğitimi")}
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Kalıcı Dudak Renklendirme Eğitimi")}
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Kalıcı Makyaj Silme Eğitimi")}
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Güzellik uzmanlığı Dalında Mesleki Yeterlilik Eğitimi")}
              </li>
              <li>
                <i className="ri-check-double-line"></i> {t("Ustalık Belgesi")}
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                {t("Usta Öğreticilik Belgesi")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
