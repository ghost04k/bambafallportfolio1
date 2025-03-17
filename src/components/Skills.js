import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* titre */}
        <div className="titles">
          <div className="title">Compétences Graphiques</div>
          <div className="subtitle">Créativité et conception visuelle</div>
        </div>
        {/* compétences items */}
        <div className="skills percent">
          <ul>
            <li>
              <div className="name">Adobe Photoshop</div>
              <div className="single-post-text">
                <p>
                  Maîtrise avancée pour la retouche photo et la création d'images percutantes.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Adobe Illustrator</div>
              <div className="single-post-text">
                <p>
                  Création d’illustrations vectorielles et de designs innovants.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Adobe InDesign</div>
              <div className="single-post-text">
                <p>
                  Conception de mises en page professionnelles pour supports imprimés et digitaux.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">After Effects</div>
              <div className="single-post-text">
                <p>
                  Création d’animations et d’effets visuels pour des vidéos impactantes.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* titre */}
        <div className="titles">
          <div className="title">Compétences Linguistiques</div>
          <div className="subtitle">Langues et communication</div>
        </div>
        {/* compétences items */}
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">Français</div>
              <div className="single-post-text">
                <p>Langue maternelle.</p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Anglais</div>
              <div className="single-post-text">
                <p>Niveau B2.</p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* titre */}
        <div className="titles">
          <div className="title">Compétences Techniques</div>
          <div className="subtitle">Développement web et outils digitaux</div>
        </div>
        {/* compétences items */}
        <div className="skills circles">
          <ul>
            <li>
              <div className="progress p90">
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">WordPress</div>
              <div className="single-post-text">
                <p>Gestion et développement de sites sous WordPress.</p>
              </div>
            </li>
            
            
            <li>
              <div className="progress p95">
                <div className="percentage" />
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">HTML, CSS</div>
              <div className="single-post-text">
                <p>Maîtrise du développement front-end pour des interfaces responsive.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};