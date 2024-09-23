import { fetchMovieCast } from "../App/App";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
}
