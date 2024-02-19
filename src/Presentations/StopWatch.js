import React, { useState, useRef } from "react";
import swal from "sweetalert";

export const StopWatch = () => {
  const [Timer, setTimer] = useState(0);
  const [Running, isRunning] = useState(false);
  const timerRef = useRef();
  const counterRef = useRef();
  const handleStart = () => {
    if (Running === false) {
      isRunning(true);
      timerRef.current = setInterval(() => setTimer((Timer) => Timer + 1),1000);
    } 
    else {
      timerRef.current = setTimer(Timer);
      isRunning(false);
    }
  };
  const handlePause = () => {
    clearInterval(timerRef.current);
    isRunning(false);
    swal({
      title: "StopWatch Paused",
      text: `You paused at ${Timer}`,
      icon: "warning",
      dangerMode: true,
    });
    counterRef.current = { Timer };
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    isRunning(false);
    swal({
      title: "StopWatch Stopped",
      text: `You completed ${Timer} seconds`,
      icon: "warning",
      dangerMode: true,
    });
    setTimer(0);
    counterRef.current = 0;
  };

  return (
    <div>
      <h1>StopWatch</h1>
      {Timer}
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
