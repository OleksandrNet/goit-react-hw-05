import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Theme from "../Theme/Theme";
import { useEffect, useState } from "react";
import css from "./App.module.css";

const getInitialClicks = () => {
  const savedClicks = window.localStorage.getItem("my-clicks");
  return savedClicks !== null
    ? JSON.parse(savedClicks)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export default function App() {
  const [clicks, setClicks] = useState(getInitialClicks);

  useEffect(() => {
    window.localStorage.setItem("my-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (click) => {
    setClicks({
      ...clicks,
      [click]: clicks[click] + 1,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const reset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positive = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <div className={css.wrap}>
      <Description></Description>
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      ></Options>
      {totalFeedback ? (
        <Feedback
          positive={positive}
          totalFeedback={totalFeedback}
          clicks={clicks}
        />
      ) : (
        <Notification />
      )}
      <Theme />
    </div>
  );
}
