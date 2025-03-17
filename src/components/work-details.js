import { useRouter } from "next/router";

const WorkDetails = () => {
  const router = useRouter();
  const { image, title, category, description } = router.query;

  return (
    <div className="section work-details" id="section-work-details">
      <div className="content">
        <div className="titles">
          <div className="title">{title || "Détails du projet"}</div>
          <div className="subtitle">{category || "Catégorie"}</div>
        </div>
        <div className="work-details-content">
          {image && (
            <img
              src={image}
              alt={title}
              className="work-details-image"
              style={{ maxWidth: "100%", marginBottom: "20px" }}
            />
          )}
          <p>{description || "Aucune description disponible."}</p>
        </div>
        <button onClick={() => router.back()} className="btn">
          Retour
        </button>
      </div>
    </div>
  );
};

export default WorkDetails;