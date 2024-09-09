import { useState } from "react";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return alert("Please enter a search term!");
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
