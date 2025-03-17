const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Expériences et Compétences</div>
          <div className="subtitle">Mes expériences professionnelles</div>
        </div>
        {/* services items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-comments" />
              </div>
              <div className="name">
                Référent Communication Interne
              </div>
              <div className="single-post-text">
                <p>
                  Déploiement de stratégies de communication interne, 
                  création de supports variés (print, vidéos, newsletters), 
                  et accompagnement des collaborateurs pour améliorer la circulation d’informations et l'engagement interne.
                </p>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-project-diagram" />
              </div>
              <div className="name">
                Chargé de communication et Responsable projet numérique
              </div>
              <div className="single-post-text">
                <p>
                  Digitalisation des formations, création de supports de communication 
                  (plaquettes, brochures, affiches), animation des réseaux sociaux et 
                  gestion du site web pour renforcer la visibilité numérique.
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
                Président du CESSEL
              </div>
              <div className="single-post-text">
                <p>
                  Animation d'une équipe de 30 personnes, gestion des événements et 
                  partenariats, mise en place de stratégies de communication et 
                  augmentation de la participation de 40 % grâce aux actions menées.
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