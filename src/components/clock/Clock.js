import React from "react";
import { useState } from "react";

function Clock() {
  const [resume, setResume] = useState(0);
  const [cronos, setCronos] = useState({minutes: 25, seconds: 0})
  const [intervalId, setIntervalId] = useState();
  const resumeButton = () => {
    initial()
    setResume(2);
  };
  const pauseButton = () =>{
    setResume(1);
    clearInterval(intervalId)
  }
  const clearButton = () =>{
    setResume(0);
    clearInterval(intervalId);
    setCronos({minutes: 25, seconds: 0})
  }
 
  const initial = () =>{
    setResume(2);
    const id  = setInterval(() => {
      setCronos((current) => {
        if (current.seconds > 0) {
          return { ...current, seconds: current.seconds - 1 };
        }
        if (current.seconds === 0) {
          if (current.minutes === 0) {
            clearInterval(id);
          } else {
            return { minutes: current.minutes - 1, seconds: 59 };
          }
        }
      });
    }, 1000);
    setIntervalId(id);
  };
  const button = () => {
    switch (resume) {
      case 0:
        return <button onClick={initial}>Start</button>;
      case 1:
        return <button onClick={resumeButton}>Resume</button>;
      case 2:
        return <button onClick={pauseButton}>Pause</button>;
      default:
        return <h1>Error</h1>;
    }
  };

  return (
    <div>
      <h1>
        {cronos.minutes < 10 ? `0${cronos.minutes}` : cronos.minutes}:
        {cronos.seconds < 10 ? `0${cronos.seconds}` : cronos.seconds}
      </h1>
      {button()}
      <br />
      <button onClick={clearButton}>Clear</button>
    </div>
  );
}

export default Clock;
