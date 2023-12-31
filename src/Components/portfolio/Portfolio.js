/* eslint-disable no-unused-vars */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import HizmetCardTitle from "./HizmetCardTitle";
import data from "../../data/product.json";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";


function Portfolio() {
  const { t } = useTranslation();
  return (
    <SRLWrapper>
      <section
        id="portfolio"
        className="portfolio"
        style={{ marginTop: "5rem", padding: "0rem 1.5rem 1.5rem 1.5rem" }}
      >
        <Container data-aos="fade-up">
          <div className="section-title">
            <h2>{t("HİZMETLERİMİZ")}</h2>
          </div>

          <Row>
            {data.map((product) => {
              const { picture, nav, id } = product;
              const title = t(product.title);
              const desc = t(product.desc);

              return (
                <Col md={4} key={id} className="text-center mb-5">
                  <HizmetCardTitle
                    picture={picture}
                    title={title}
                    desc={desc}
                    nav={nav}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </SRLWrapper>
  );
}

export default Portfolio;
