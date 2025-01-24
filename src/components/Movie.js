import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ movie, id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <Link to={`/movie/${id}`}>{title}</Link>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)} ...` : summary}</p>
      {movie.hasOwnProperty("genres") ? (
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
