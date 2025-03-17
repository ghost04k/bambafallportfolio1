const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* titre */}
        <div className="titles">
          <div className="title">Compétences</div>
          <div className="subtitle">Mes compétences et expertises</div>
        </div>
        {/* éléments de compétences */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-lightbulb" />
              </div>
              <div className="name">
                Stratégie <br />
                Digitale
              </div>
              <div className="single-post-text">
                <p>
                  Conception et mise en œuvre de stratégies de communication digitale 
                  pour optimiser la visibilité et l'engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-pencil-alt" />
              </div>
              <div className="name">
                Création de <br />
                Contenus
              </div>
              <div className="single-post-text">
                <p>
                  Rédaction de contenus engageants et création de supports visuels 
                  (infographies, vidéos, newsletters) pour améliorer la communication.
                </p>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-users" />
              </div>
              <div className="name">
                Communication <br />
                Interne
              </div>
              <div className="single-post-text">
                <p>
                  Animation des réseaux internes et mise en place d’outils de communication 
                  pour favoriser la collaboration et la cohésion des équipes.
                </p>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-calendar-alt" />
              </div>
              <div className="name">
                Gestion <br />
                d'Événements
              </div>
              <div className="single-post-text">
                <p>
                  Organisation et coordination d'événements internes et externes, 
                  de la planification à l’exécution, en garantissant leur réussite.
                </p>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-cogs" />
              </div>
              <div className="name">
                Conduite du <br />
                Changement
              </div>
              <div className="single-post-text">
                <p>
                  Accompagnement des équipes dans la transformation et mise en place de 
                  plans d’actions pour faciliter l’adoption des nouvelles pratiques.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default Service;