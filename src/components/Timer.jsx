/* eslint-disable react/prop-types */
import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seds = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      {" "}
      {mins < 10 && "0"}
      {mins}:{seds < 10 && "0"}
      {seds}
    </div>
  );
}

export default Timer;
