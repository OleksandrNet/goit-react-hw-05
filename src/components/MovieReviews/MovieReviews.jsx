import { fetchMovieReviews } from "../../movies-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>Коментарі відсутні</p>;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
