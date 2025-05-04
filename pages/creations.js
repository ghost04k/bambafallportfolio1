import React from "react";
import Header from  "@/src/layouts/Header";

const Creation = () => {

    <Header />

  return (
    <div className="section creations" id="section-creations">
      <div className="content">
        <div className="titles center">
          <div className="title">🎨 Mes Créations</div>
          <div className="subtitle">Projets visuels & vidéos professionnels</div>
        </div>

        <div className="creations-grid">
          <div className="creation-card">
            <h3>Supports visuels (Canva)</h3>
            <p>
              Supports de communication créés avec Canva : modernes, dynamiques et adaptés à chaque cible.
            </p>
            <a
              href="https://www.canva.com/design/DAGmgkwG6yk/ABNDQMTWVtepxNUKZ_4xIg/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              📎 Voir sur Canva
            </a>
          </div>

          <div className="creation-card">
            <h3>Digitalisation de la formation</h3>
            <p>
              Playlist de vidéos pédagogiques tournées pour enrichir les formations industrielles.
            </p>
            <a
              href="https://www.youtube.com/playlist?list=PL_CP7mx0EZBP50ewsGVeNWnoy5vAjNGmy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              🎥 Voir la playlist
            </a>
          </div>

          <div className="creation-card">
            <h3>Stratégie de communication</h3>
            <p>
              Campagnes internes, valorisation métier, communication humaine et efficace.
            </p>
            <a
              href="https://www.youtube.com/playlist?list=PL_CP7mx0EZBNvycnDE_Cv8EAucMHXLmJD"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              📺 Voir les actions
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .titles.center {
          text-align: center;
        }

        .creations-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          margin-top: 2.5rem;
        }

        .creation-card {
          background: linear-gradient(135deg, #ffffff, #f8f8f8);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          max-width: 600px;
          width: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .creation-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }

        .creation-card h3 {
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
          color: #333;
        }

        .creation-card p {
          font-size: 1rem;
          color: #555;
          margin-bottom: 1.2rem;
        }

        .btn-link {
          display: inline-block;
          padding: 0.6rem 1.4rem;
          background-color: #0070f3;
          color: white;
          border-radius: 10px;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .btn-link:hover {
          background-color: #0051aa;
        }
      `}</style>
    </div>
  );
};

export default Creation;