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
        return (
          <button onClick={initial} className="w-full border border-white py-3 rounded-lg">
            Start
          </button>
        );
      case 1:
        return (
          <button onClick={resumeButton} className="w-full border border-white py-3 rounded-lg ">
            Resume
          </button>
        );
      case 2:
        return (
          <button onClick={pauseButton} className="w-full border border-white py-3 rounded-lg text-red-500">
            Pause
          </button>
        );
      default:
        return <h1>Error</h1>;
    }
  };

  return (
    <div className="flex flex-col h-5/6 justify-between">
      <div className="w-full my-28">
        <div className="w-full text-center self-center">
          {cronos.minutes < 10 ? `0${cronos.minutes}` : cronos.minutes}:
          {cronos.seconds < 10 ? `0${cronos.seconds}` : cronos.seconds}
        </div>
      </div>
      <div className="h-1/3 flex flex-col justify-between">
        {button()}
        <br />
        <button onClick={clearButton} className="w-full border border-white py-3 rounded-lg">Clear</button>
      </div>
    </div>
  );
}

export default Clock;
