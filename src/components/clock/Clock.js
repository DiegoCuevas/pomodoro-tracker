import React from "react";
import { useState, useEffect } from "react";

function Clock() {
  const [resume, setResume] = useState(false);
  const [cronos, setCronos] = useState({minutes: 25, seconds: 0})
  const [intervalId, setIntervalId] = useState();
  const resumeButton = () => {
    setResume((current) => !current);
    console.log(resume); // is false
  };
  const pauseButton = () =>{
    clearInterval(intervalId)
    console.log('clear')
  }
  const clearButton = () =>{
    clearInterval(intervalId);
    setCronos({minutes: 25, seconds: 0})
  }
  useEffect(() => {
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
    return () => {
      clearInterval(id);
    };
  }, [resume]);

  return (
    <div>
      <h1>
        {cronos.minutes < 10 ? `0${cronos.minutes}` : cronos.minutes}:
        {cronos.seconds < 10 ? `0${cronos.seconds}` : cronos.seconds}
      </h1>
      {resume ? (
        <button onClick={resumeButton}>Resume</button>
      ) : (
        <button onClick={pauseButton}>Pause</button>
      )}
      <br />
      <button onClick={clearButton}>Clear</button>
    </div>
  );
}

export default Clock;
