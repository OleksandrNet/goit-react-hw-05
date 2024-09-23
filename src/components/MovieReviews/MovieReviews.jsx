import { fetchMovieReviews } from "../App/App";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();
  const [reviews, setReviewst] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviewst);
  }, [movieId]);
  console.log(reviews);

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
