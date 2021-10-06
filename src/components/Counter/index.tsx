import React from 'react';
import './styles.css';

interface Props {
  count: number;
}

const Counter: React.FC<Props> = ({ count }) => {
  function getSeconds(seconds: number) {
    const divider = ":";
    const position = 2;
    const time: string = new Date(seconds * 100).toISOString().slice(15, 23).split('.').join('')
      .split(':').join('');
    const totalTime = [time.slice(0, position), divider, time.slice(position, position * 2), divider, time.slice(position*2, position * 3)].join('');
    return totalTime;
  }

  return (
    <div className="counter">
      <span>{getSeconds(count)}</span>
    </div>
  )
}

export default Counter;