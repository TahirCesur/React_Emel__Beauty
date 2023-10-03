import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import HizmetCardTitle from "./HizmetCardTitle";
import Spacer2 from "../common/Spacer2";

function Hizmet() {
  return (
    <SRLWrapper>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <Spacer2 />
          <div className="section-title" data-aos="fade-up" data-aos-delay="100">
            <h2>HİZMETLERİMİZ</h2>
          </div>

          <div className="row">
            <div className="col-md-3 text-center">
              <HizmetCardTitle
                picture="assets/img/foto/thumbs/microblading-1.webp"
                title="Microblading Kaş"
                nav="/Microblading"
              />
            </div>

            <div className="col-md-3 text-center">
              <HizmetCardTitle
                picture="assets/img/foto/thumbs/kas-pudralama-1.webp"
                title="Kaş Pudralama"
                nav="/Pudralama"
              />
            </div>

            <div className="col-md-3 text-center">
              <HizmetCardTitle
                picture="assets/img/foto/thumbs/kalici-eyeliner-1.webp"
                title="Eyeliner-Dipliner"
                nav="/EyelineDipliner"
              />
            </div>

            <div className="col-md-3 text-center">
              <HizmetCardTitle
                picture="assets/img/foto/thumbs/dudak-renklendirme-2.webp"
                title="Dudak Renklendirme"
                nav="/DuadakRenklendirme"
              />
            </div>

            <div className="col-md-3 text-center">
              <HizmetCardTitle
                picture="assets/img/foto/thumbs/bbglow-1.webp"
                title="BB Glow"
                nav="/BBGlow"
              />
            </div>

            <div className="col-md-3 text-center">
              <HizmetCardTitle
                picture="assets/img/foto/thumbs/kas-kirpik-laminasyon-1.webp"
                title="Kaş-Kirpik Laminasyon"
                nav="/KasKirpik"
              />
            </div>

            <div className="col-md-3 text-center ">
              <HizmetCardTitle
                picture="assets/img/foto/thumbs/makyajsilme.webp"
                title="Makyaj Silme"
                nav="/MakyajSilme"
              />
            </div>
          </div>
        </div>
      </section>
    </SRLWrapper>
  );
}

export default Hizmet;
