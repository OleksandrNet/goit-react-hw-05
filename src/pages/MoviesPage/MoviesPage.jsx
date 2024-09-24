import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = params.get("query") ?? "";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await searchMovies(query);
        setMovies(data);
        setError(null);
      } catch (error) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]);

  const location = useLocation();

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchQuery = form.elements.query.value.trim();
    if (searchQuery === "") {
      return <p>000000</p>;
    }
    setParams({ query: searchQuery });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {movies.length > 0 ? (
        <MovieList state={location} movies={movies} />
      ) : (
        <p>No movies found. Try searching for something else!</p>
      )}
    </div>
  );
}
