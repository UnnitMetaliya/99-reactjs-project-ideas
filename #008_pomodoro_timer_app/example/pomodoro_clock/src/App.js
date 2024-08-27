import React, { useState, useEffect } from 'react';
import './App.css';
import Timer from './Timer';
import Controls from './Controls';

function App() {
  const [time, setTime] = useState(25 * 60); // Initial time is 25 minutes (in seconds)
  const [isRunning, setIsRunning] = useState(false);

  // Function to start the timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Function to pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    setTime(25 * 60); // Reset time to 25 minutes
  };

  // Function to format time from seconds to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Function to handle each tick of the timer
  const tick = () => {
    if (time > 0) {
      setTime((prevTime) => prevTime - 1);
    } else {
      // Timer ended, reset
      resetTimer();
    }
  };

  // Use useEffect to start and stop the timer based on isRunning state
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => tick(), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <Timer time={formatTime(time)} />
      <Controls
        isRunning={isRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default App;
