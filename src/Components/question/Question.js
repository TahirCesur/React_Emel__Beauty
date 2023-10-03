/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";

function Question() {
  const { t } = useTranslation();
  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("SIKÇA SORULAN SORULAR")}</h2>
          <p>
            {t("Aradığınız soruyu bulamadınız mı? Bize Instagram ve WhatsApp üzerinden ulaşabilirsiniz.")}
          </p>
        </div>

        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapsed"
                data-bs-target="#faq-list-1"
              >
                {t("Kıl Tekniği (Microblading) her kaşa ve cilde uygulanır mı?")}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-1"
                className="collapse show"
                data-bs-parent=".faq-list"
              >
                <p>
                  {t("Hayır. Kıl Tekniği için karma veya kuru ince bir cilt olması gerekir.")}
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                className="collapsed"
              >
                {t("Kalıcı Kaş işlemi acıtır mı?")}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-2"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  {t("Ağrı insandaki ağrı eşiğine göre değişir. Gerek duyulduğunda acı azaltımı için lokal anestezik krem uygulanır.")}
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed"
              >
                {t("Kaş işlemi ne kadar sürer?")}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-3"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>{t("Ortalama 1-2 saat arası sürmektedir.")}</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapsed"
                data-bs-target="#faq-list-4"
              >
                {t("Pudralama ya da Kıl Tekniği yaptıracağıma nasıl karar vermeliyim?")}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-4"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  {t("Hangi işlemin sizi uzun vadede mutlu edeceğine zamanla birlikte karar vermelisiniz. Sizleri en doğru şekilde yönlendirmeye çalışacağımızdan emin olabilirsiniz.")}
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapsed"
                data-bs-target="#faq-list-5"
              >
                {t("Dudak Renklendirme ruj gibi mi görünüyor?")}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-5"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  {t("Renklendirmenin nasıl görüneceğine birlikte karar veriyoruz. İster ruj efekti ister daha soft bir biçimde çalışmak bizim elimizde.")}
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapsed"
                data-bs-target="#faq-list-6"
              >
                {t("Dudak Renklendirme işlemi çok acıtır mı?")}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-6"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  {t("İşlem öncesi uygulama yapılacak bölge anestezik krem ile uyuşturulur. İşlem esnasında yardımcı ara anestezi ihtiyaca göre kullanılabilir. Ağrı ve acı minimum seviyeye düşürülür.")}
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapsed"
                data-bs-target="#faq-list-7"
              >
                {t("Kalıcı Dipliner ve Kalıcı Eyeliner arasındaki fark nedir?")}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-7"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  {t("Dipliner kirpik diplerine uygulanırken, Eyeliner ise kalın ve kuyruk çizimi yapılarak gerçekleştirilir.")}
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="800">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapsed"
                data-bs-target="#faq-list-8"
              >
                {t("Kalıcı Eyeliner-Dipliner işlemi acılı bir uygulama mıdır?")}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-8"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  {t("Ağrı-acı minimumdur. İşlem öncesi uygulama yapılacak bölge anestezik krem ile uyuşturulur. Konforlu bir işlemdir.")}
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="900">
              <i className="bx bx-help-circle icon-help"></i>
              <a
                data-bs-toggle="collapse"
                className="collapsed"
                data-bs-target="#faq-list-9"
              >
                {t("Kalıcı Eyeliner-Dipliner işlemi cildimizde ne kadar kalır?")}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-9"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>{t("Kalıcılık ortalama 2-3 senedir.")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Question;
