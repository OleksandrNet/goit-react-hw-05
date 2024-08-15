export default function Feedback({ totalFeedback, clicks }) {
  return (
    <div>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Bad: {clicks.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((clicks.good / totalFeedback) * 100)}% </p>
    </div>
  );
}
