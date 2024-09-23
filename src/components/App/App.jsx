import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import axios from "axios";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGMzMzhiN2Q4ZDYwZjM0NDZiM2U0ZDA4NTNhNThjNyIsIm5iZiI6MTcyNzA4NjY3OC45MDEzNzksInN1YiI6IjY2ZjEzZWY1NmMzYjdhOGQ2NDhkYmFlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hfKc3x7XtIULG7Wmi8va3yZnlm0E0HCrnci0Eolu9sY";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: API_TOKEN,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await api.get(`/search/movie`, {
    params: {
      query,
      include_adult: false,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
export default function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
