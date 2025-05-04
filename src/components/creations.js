import React from "react";

const Creation = () => {
  return (
    <div className="section creations" id="section-creations">
      <div className="content">
        <div className="titles">
          <div className="title">Mes Créations</div>
          <div className="subtitle">Projets en image et vidéo</div>
        </div>

        <div className="creations-grid">
          <div className="creation-card">
            <h3>Supports visuels (Canva)</h3>
            <p>Exemples de supports de communication créés sur Canva.</p>
            <a
              href="https://www.canva.com/design/DAGmgkwG6yk/ABNDQMTWVtepxNUKZ_4xIg/view?utm_content=DAGmgkwG6yk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h88a973303c"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Voir sur Canva
            </a>
          </div>

          <div className="creation-card">
            <h3>Digitalisation de la formation</h3>
            <p>Playlist vidéo illustrant la digitalisation des formations industrielles.</p>
            <a
              href="https://www.youtube.com/playlist?list=PL_CP7mx0EZBP50ewsGVeNWnoy5vAjNGmy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Voir la playlist YouTube
            </a>
          </div>

          <div className="creation-card">
            <h3>Stratégie de communication</h3>
            <p>Playlist démontrant les actions de communication menées sur le terrain.</p>
            <a
              href="https://www.youtube.com/playlist?list=PL_CP7mx0EZBNvycnDE_Cv8EAucMHXLmJD"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Voir la playlist YouTube
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .creations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .creation-card {
          background: #fff;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .creation-card h3 {
          margin-bottom: 0.5rem;
        }

        .btn-link {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.2rem;
          background-color: #0070f3;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          transition: background-color 0.3s;
        }

        .btn-link:hover {
          background-color: #0059c1;
        }
      `}</style>
    </div>
  );
};

export default Creation;