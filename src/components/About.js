const About = () => {
  return (
    <div className="section about" id="section-about">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">à propos</div>
          <div className="subtitle">Mon histoire</div>
        </div>
        {/* text */}
        <div className="cols">
          <div className="col">
            <div className="single-post-text">
              <p>
              Spécialiste en communication interne et externe, je mets mon expertise en gestion de
projets et création de supports au profit d’équipes dynamiques. En recherche d’un CDD ou
CDI, j’aspire à booster l’engagement et la cohésion par des stratégies communicantes
impactantes.
              </p>
            </div>
          </div>
          <div className="col col-full">
            <div className="single-post-text">
              <p>
              Spécialiste en communication interne et externe, je mets mon expertise en gestion de
projets et création de supports au profit d’équipes dynamiques. En recherche d’un CDD ou
CDI, j’aspire à booster l’engagement et la cohésion par des stratégies communicantes
impactantes.
              </p>
            </div>
          </div>
        </div>
        {/* info list */}
        <div className="info-list">
          <ul>
            <li>
              <strong>Residence:</strong> Lyon, France
            </li>
            <li>
              <strong>Disponible:</strong> Maintenant
            </li>
            <li>
              <strong>Address:</strong> Lyon 69003, France
            </li>
            <li>
              <strong>Phone:</strong> 06 05 51 03 75
            </li>
            <li>
              <strong>E-mail:</strong> bamba.fall.pro@gmail.com
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
