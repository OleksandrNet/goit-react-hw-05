export default function Feedback({ positive, totalFeedback, clicks }) {
  return (
    <div>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Bad: {clicks.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positive}% </p>
    </div>
  );
}
