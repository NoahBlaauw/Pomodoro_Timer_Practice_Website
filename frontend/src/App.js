import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 30 minutes in seconds
  const POMODORO_TIME = 30 * 60;

  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function resetTimer() {
    setTimeLeft(POMODORO_TIME);
    setIsRunning(true);
  }

  return (
    <div className="app">
      <h1 className="title">POMODORO</h1>

      <div className="timer-box">
        <span className="time">{formatTime(timeLeft)}</span>
      </div>

      <div className="controls">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
