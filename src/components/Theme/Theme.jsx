import { useEffect, useState } from "react";
import css from "./Theme.module.css";

export default function Theme() {
  const [isDay, setIsDay] = useState(true);
  const themeBackground = isDay ? "#242424" : "skyblue";
  const themeColor = isDay ? "rgba(255, 255, 255, 0.87)" : "black";

  useEffect(() => {
    document.body.style.backgroundColor = themeBackground;
    document.body.style.color = themeColor;
    document.body.style.transition = "background-color 420ms ease-in-out";
  }, [themeBackground, themeColor]);

  const toggleTheme = () => {
    setIsDay((day) => !day);
  };

  return (
    <button onClick={toggleTheme} className={css.btn}>
      {isDay ? "on day " : "on night"}
    </button>
  );
}
