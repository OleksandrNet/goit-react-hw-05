import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const query = params.get("query") ?? "";

  useEffect(() => {
    async function fetchData() {
      const data = await searchMovies(query);
      setMovies(data);
    }

    fetchData();
  }, [query]);

  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate({ search: `?query=${query}` });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setParams({ query: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 ? <MovieList state={location} movies={movies} /> : ""}
    </div>
  );
}
