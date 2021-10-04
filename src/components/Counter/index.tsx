import React from 'react';
import './styles.css';

interface Props {
  count: number;
}

const Counter: React.FC<Props> = ({ count }) => {
  function getSeconds(seconds: number) {
    const totalTime: string = new Date(seconds * 1000).toISOString().substr(11, 8);
    return totalTime;
  }

  return (
    <div className="counter">
      <span>{getSeconds(count)}</span>
    </div>
  )
}

export default Counter;