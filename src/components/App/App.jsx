import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <Description></Description>
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      ></Options>
      {totalFeedback ? (
        <Feedback totalFeedback={totalFeedback} clicks={clicks} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
