import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const Works = () => {
  // Référence pour Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("all");
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".box-items", {
        itemSelector: ".box-col",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  // Redirige vers la page de détails du work en passant les infos dans la query string
  const goToWorkDetails = (data) => {
    router.push({
      pathname: "/work-details",
      query: {
        id: data.id,
        image: data.image,
        title: data.title,
        category: data.category,
        description: data.description,
      },
    });
  };

  return (
    <div className="section works" id="section-portfolio">
      <div className="content">
        {/* Titres */}
        <div className="titles">
          <div className="title">Portfolio</div>
          <div className="subtitle">Latest works</div>
        </div>
        {/* Filtre */}
        <div className="filter-menu">
          <div className="filters">
            <div className="btn-group">
              <label
                data-text="All"
                className={`c-pointer ${activeBtn("all")}`}
                onClick={handleFilterKeyChange("all")}
              >
                <input type="radio" name="fl_radio" defaultValue=".all" />
                All
              </label>
            </div>
            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("cv1")}`}
                onClick={handleFilterKeyChange("cv1")}
                data-text="Référent"
              >
                <input type="radio" name="fl_radio" defaultValue=".cv1" />
                Référent Communication
              </label>
            </div>
            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("cv2")}`}
                onClick={handleFilterKeyChange("cv2")}
                data-text="Chargé"
              >
                <input type="radio" name="fl_radio" defaultValue=".cv2" />
                Chargé de Communication
              </label>
            </div>
            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("cv3")}`}
                onClick={handleFilterKeyChange("cv3")}
                data-text="Président"
              >
                <input type="radio" name="fl_radio" defaultValue=".cv3" />
                Président du CESSEL
              </label>
            </div>
          </div>
        </div>
        {/* Portfolio items */}
        <div className="box-items">
          {/* Work 1 : Référent Communication Interne */}
          <div className="box-col cv1 all">
            <div
              className="box-item"
              onClick={() =>
                goToWorkDetails({
                  id: "cv1",
                  image: "images/works/work_cv1.jpg",
                  title: "Référent Communication Interne",
                  category: "SNCF Voyageurs LYON",
                  description:
                    "Déploiement de stratégies de communication interne, création de supports variés (print, vidéos, newsletters) pour optimiser la circulation d’informations et l'engagement des collaborateurs.",
                })
              }
            >
              <div className="image">
                <img
                  src="images/works/work_cv1.jpg"
                  alt="Référent Communication Interne"
                />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <i className="icon fas fa-images" />
                    </span>
                  </span>
                </span>
              </div>
              <div className="desc">
                <div className="category">Communication Interne</div>
                <div className="name">Référent Communication Interne</div>
              </div>
            </div>
          </div>
          {/* Work 2 : Chargé de Communication */}
          <div className="box-col cv2 all">
            <div
              className="box-item"
              onClick={() =>
                goToWorkDetails({
                  id: "cv2",
                  image: "images/works/work_cv2.jpg",
                  title: "Chargé de Communication & Responsable Projet Numérique",
                  category: "Le Marais Saint-Thérèse",
                  description:
                    "Digitalisation des formations, création de supports de communication (plaquettes, brochures, affiches), animation des réseaux sociaux et gestion du site web pour renforcer la visibilité numérique.",
                })
              }
            >
              <div className="image">
                <img
                  src="images/works/work_cv2.jpg"
                  alt="Chargé de Communication"
                />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <i className="icon fas fa-video" />
                    </span>
                  </span>
                </span>
              </div>
              <div className="desc">
                <div className="category">Communication Digitale</div>
                <div className="name">Chargé de Communication</div>
              </div>
            </div>
          </div>
          {/* Work 3 : Président du CESSEL */}
          <div className="box-col cv3 all">
            <div
              className="box-item"
              onClick={() =>
                goToWorkDetails({
                  id: "cv3",
                  image: "images/works/work_cv3.jpg",
                  title: "Président du CESSEL",
                  category: "Collectif des Étudiants et Stagiaires",
                  description:
                    "Animation d'une équipe de 30 personnes, gestion d'événements et partenariats, mise en place de stratégies de communication pour augmenter la participation de 40%.",
                })
              }
            >
              <div className="image">
                <img
                  src="images/works/work_cv3.jpg"
                  alt="Président du CESSEL"
                />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <i className="icon fas fa-link" />
                    </span>
                  </span>
                </span>
              </div>
              <div className="desc">
                <div className="category">Management</div>
                <div className="name">Président du CESSEL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default Works;