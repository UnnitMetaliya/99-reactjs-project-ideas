import React from 'react';

function Controls({ isRunning, startTimer, pauseTimer, resetTimer }) {
  return (
    <div className="controls">
      {isRunning ? (
        <>
          <button onClick={pauseTimer}>Pause</button>
          <button onClick={resetTimer}>Reset</button>
        </>
      ) : (
        <button onClick={startTimer}>Start</button>
      )}
    </div>
  );
}

export default Controls;
