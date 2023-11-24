/* eslint-disable no-unused-vars */
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
      className="topbar fixed-top header-inner-pages"
      style={{ backgroundColor: "#f7b789", padding: "10px" }}
    >
      <Container>
        <Button
          onClick={() => {
            changeLanguage("tr");
          }}
          style={{
            background: "#f7b789",
            border: "#000 1px solid",
            color: "#000",
          }}
        >
          {t("TR")}
        </Button>
        &nbsp;&nbsp;
        <Button
          onClick={() => {
            changeLanguage("en");
          }}
          style={{
            background: "#f7b789",
            border: "#000 1px solid",
            color: "#000",
          }}
        >
          {t("EN")}
        </Button>
      </Container>
    </div>
  );
};

export default TopBar;

//* d-none d-md-inline yapma nedenimiz küçük ekranda
//* kaybolsunlar diye ve block olursa aşağı iner diye inline yaptık

//? d-none d-md-block yapma nedenimiz küçük ekranda kaybolsunlar diye yapmış olduk...
