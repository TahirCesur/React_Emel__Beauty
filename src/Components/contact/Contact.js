/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mtj9pv8",
        "template_ku28nwn",
        e.target,
        "dKtNhC4HOIqCLVE9o"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(t("Email başarıyla gönderildi!"));
        },
        (error) => {
          console.log(error.text);
          alert(t("Email gönderilirken bir hata oluştu!"));
        }
      );
    e.target.reset();
  }
  
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("İLETİŞİM")}</h2>
          <p>
            {t(
              "Soru, görüş, öneri ve istekleriniz için aşağıdaki bilgiler aracılığıyla bize 7/24 ulaşabilirsiniz ."
            )}
          </p>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt-fill"></i>
                <h4>{t("Adres")}</h4>
                <p>İstasyon Mahallesi , Halkalı / İSTANBUL</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope-fill"></i>
                <h4>Email</h4>
                <p>emelbeauty.com.tr@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone-fill"></i>
                <h4>Gsm</h4>
                <p>+90</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24080.701859265482!2d28.757942827765063!3d41.0233365025807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa404c6fca9e7%3A0x929b10890d7ec44f!2s%C4%B0stasyon%20Mahallesi!5e0!3m2!1str!2str!4v1677015709594!5m2!1str!2str"
                style={{ border: "0", width: "100%", height: "290px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adresimiz"
              >
                {t("Lokasyon")}
              </iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              action=""
              method="post"
              role="form"
              className="php-email-form"
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="form-group">
                  <label htmlFor="name">{t("İsminiz")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t("Emailiniz")}</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t("Konu")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t("Mesajınız")}</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="8"
                  ></textarea>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value={t("Gönder")}
                    className="form-control mt-3"
                    style={{
                      borderRadius: "50px",
                      background: "#f7b789",
                      color: "#000"
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
