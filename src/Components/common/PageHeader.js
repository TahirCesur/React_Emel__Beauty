import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function PageHeader(props) {
  const { t } = useTranslation();

  return (
    <div className="page-header">
      <Container fluid>
        <Row>
          <Col>
            <section id="breadcrumbs" className="breadcrumbs">
              <div className="container">
                <h2>{props.title}</h2>
                <ol className="text-center">
                  <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                      {t("Anasayfa")}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                      {t("Hizmetlerimiz")}
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </ol>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageHeader;
