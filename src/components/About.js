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
              <h3>Stratégie de communication</h3>
              <p>
                <strong>Mon approche :</strong> Forgée à la SNCF, elle repose sur une écoute active du terrain pour bâtir une communication efficace et humaine.
              </p>
              <p>
                <strong>Constat :</strong> Les équipes expriment un fort besoin de lien et de reconnaissance.
              </p>
              <p><strong>Mes actions concrètes :</strong></p>
              <ul>
                <li><strong>Savoir Fer :</strong> Vidéos métiers valorisant le travail invisible des équipes</li>
                <li><strong>Accueil des nouveaux :</strong> <span>affiches dynamiques personnalisées et publications internes</span></li>
                <li><strong>Conviv'UO :</strong> Moments informels mensuels favorisant les échanges</li>
              </ul>
              <p>
                <strong>Résultats mesurables :</strong> +25% d’engagement, amélioration du climat social, forte participation aux événements
              </p>
              <p>
                <strong>Ma méthode :</strong> Identifier les besoins, créer les bons outils, mesurer l’impact avec des KPI
              </p>
              <p>
                <em>Preuve qu’une communication efficace repose sur des actions visibles, concrètes et évaluées régulièrement.</em>
              </p>
            </div>
          </div>
          <div className="col col-full">
            <div className="single-post-text"></div>
          </div>
        </div>
        {/* info list */}
        <div className="info-list">
          <ul>
            <li><strong>Residence:</strong> Lyon, France</li>
            <li><strong>Disponible:</strong> Maintenant</li>
            <li><strong>Address:</strong> Lyon 69003, France</li>
            <li><strong>Phone:</strong> 06 05 51 03 75</li>
            <li><strong>E-mail:</strong> bamba.fall.pro@gmail.com</li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default About;