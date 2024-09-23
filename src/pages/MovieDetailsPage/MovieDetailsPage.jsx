import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../components/App/App";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");
  console.log(location.state);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    }

    fetchData();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <Link to={backLinkRef.current}>Back to go</Link>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Suspense fallback={<div>LOADING SUBPAGE!!!</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
