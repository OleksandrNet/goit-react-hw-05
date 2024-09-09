import css from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  return (
    <div className={css.imageCard}>
      <img src={image.smallUrl} alt={image.description} />
    </div>
  );
}
