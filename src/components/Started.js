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
            Diplômé en communication et fort d'une expertise en gestion de projet, je mets mes compétences stratégiques et créatives au service de l'innovation organisationnelle. Mon parcours académique spécialisé en communication, combiné à mon expérience terrain chez SNCF Voyageurs, m'a permis de développer une approche unique : allier rigueur méthodologique et créativité pour concevoir des plans de communication impactants et piloter des projets primés nationalement.
 
 Aujourd'hui, je cherche à mettre cette double compétence : formation solide en communication et expérience en gestion de projet au service d'une organisation ambitieuse. Mon objectif : concevoir et déployer des stratégies communicantes qui transforment les idées en résultats concrets tout en renforçant la cohésion d'équipe.
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
