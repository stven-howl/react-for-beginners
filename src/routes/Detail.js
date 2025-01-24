import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <div>
        <img src={`${movie.medium_cover_image}`} />
      </div>
    </div>
  );
}

export default Detail;
