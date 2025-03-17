import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Experience = () => {
  return (
    <div className="section resume" id="section-experience">
      <div className="content">
        {/* Titres */}
        <div className="titles">
          <div className="title">Expériences Professionnelles</div>
          <div className="subtitle">Parcours professionnel</div>
        </div>
        {/* Résumé des expériences */}
        <div className="content-carousel">
          <Swiper {...sliderProps.experience}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">2022 - Septembre 2024</div>
                <br />
                <div className="name">
                  Référent Communication <br /> Interne - SNCF Voyageurs LYON
                </div>
                <div className="single-post-text">
                  <p>
                    Déploiement de stratégies de communication interne, création de supports variés (print, vidéos, newsletters) pour optimiser la circulation d’informations et l'engagement des collaborateurs.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">Septembre 2021 - Août 2022</div>
                <div className="name">
                  Chargé de Communication et <br /> Responsable Projet Numérique - Le Marais Saint-Thérèse
                </div>
                <div className="single-post-text">
                  <p>
                    Digitalisation des formations, création de supports de communication (plaquettes, brochures, affiches), animation des réseaux sociaux et gestion du site web pour renforcer la visibilité numérique.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2023 - Décembre 2024</div>
                <div className="name">
                  Président du CESSEL - Collectif des Étudiants et Stagiaires Sénégalais de Lyon
                </div>
                <div className="single-post-text">
                  <p>
                    Animation d'une équipe de 30 personnes, gestion d'événements et partenariats, mise en place de stratégies de communication pour augmenter la participation de 40%.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Navigation */}
          <div className="navs">
            <span className="experience_prev prev fas fa-chevron-left" />
            <span className="experience_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;