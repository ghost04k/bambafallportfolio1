import TypingAnimation from "./TypingAnimation";

const Started = () => {
  return (
    <div className="section started" id="section-started">
      <div className="centrize full-width">
        <div className="vertical-center">
          {/* title */}
          <h1 className="h-title">
            Bamba <br />
            Fall
          </h1>
          {/* content started */}
          <div className="started-content">
            {/* subtitle */}
            <div className="h-subtitles">
              <div className="h-subtitle typing-subtitle">
                <TypingAnimation />
              </div>
              <span className="typed-subtitle" />
            </div>
            {/* text */}
            <div className="h-text">
              Salut,  je suis bamba fall speecialiste en communication interne et externe, je mets mon expertise en gestion de
              projets et création de supports au profit d’équipes dynamiques. En recherche d’un CDI  j’aspire à booster l’engagement et la cohésion par des stratégies communicantes impactantes.

            </div>
            {/* button */}
            <a href="#" className="btn">
              <span className="animated-button">
                <span>Contactez Moi</span>
              </span>
              <i className="icon fas fa-chevron-right" />
            </a>
            {/* mosue button */}
            <a href="#" className="btn mouse-btn" style={{ display: "none" }}>
              <i className="icon fas fa-chevron-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Started;
