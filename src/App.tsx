import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';
import TimerButton from './components/TimerButton';

function App() {
  const [totalSeconds, setTotalSeconds] = useState(0);

  return (
    <div className="container">
      <Counter count={totalSeconds} />
      <TimerButton timeSetter={(newSeconds: number) => setTotalSeconds(totalSeconds + newSeconds)}/>
    </div>
  );
}

export default App;
