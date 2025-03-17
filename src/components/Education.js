import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Education = () => {
  return (
    <div className="section resume" id="section-education">
      <div className="content">
        {/* Titres */}
        <div className="titles">
          <div className="title">Formation</div>
          <div className="subtitle">Parcours académique</div>
        </div>
        {/* Éléments de formation */}
        <div className="content-carousel">
          <Swiper {...sliderProps.education}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">[Années]</div>
                <div className="name">
                  Master 2 Communication Institutionnelle &amp; Corporate – ESP Lyon
                </div>
                <div className="single-post-text">
                  <p>
                    Spécialisation en communication d'entreprise, gestion de crise et conduite du changement.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">[Années]</div>
                <div className="name">
                  Licence Information-Communication – Télécom Saint-Étienne
                </div>
                <div className="single-post-text">
                  <p>
                    Formation pluridisciplinaire en communication digitale, gestion de projets et médias.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">[Années]</div>
                <div className="name">
                  Formation en Infographie
                </div>
                <div className="single-post-text">
                  <p>
                    Acquisition de compétences en design graphique, création visuelle et outils de PAO (Photoshop, Illustrator, InDesign, Premiere Pro, After Effects).
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Navigation */}
          <div className="navs">
            <span className="education_prev prev fas fa-chevron-left" />
            <span className="education_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;