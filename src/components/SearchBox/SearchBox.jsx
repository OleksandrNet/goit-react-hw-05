import css from "./SearchBox.module.css";

export default function SearchBox({ filter, setFilter }) {
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      />
    </div>
  );
}
