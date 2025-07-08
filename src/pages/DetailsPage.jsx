import { useLocation } from "react-router-dom";
import movieImage from "../assets/movie.jpg";
import personImage from "../assets/person.jpg";

function DetailsPage() {
  const location = useLocation();
  const {
    name,
    title,
    poster_path,
    profile_path,
    media_type,
    overview,
    vote_average,
    popularity,
  } = location.state;
  const imagePath = poster_path || profile_path;
  const imageUrl = imagePath
    ? `https://image.tmdb.org/t/p/w500${imagePath}`
    : media_type === "person"
    ? personImage
    : movieImage;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{title || name}</h2>
      <p>
        <strong>Media Type:</strong> {media_type}
      </p>
      <p>
        <strong>{media_type === "person" ? "Popularity:" : "Rating:"}</strong> {vote_average || popularity} <br />
      
      </p>
      <img
        src={imageUrl}
        alt={title || name}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p style={{ marginTop: "20px" }}>{overview}</p>
    </div>
  );
}

export default DetailsPage;
