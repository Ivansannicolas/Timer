import React, { useEffect, useState } from "react";
import "./styles.css";

interface Props {
  timeSetter: Function;
}

const TimerButton: React.FC<Props> = ({ timeSetter }) => {
  const [actualTime, setActualTime] = useState<number>(0);
  const [isPaused, setisPaused] = useState<boolean>(true);

  function getSeconds(seconds: number) {
    const divider = ":";
    const position = 2;
    const time: string = new Date(seconds * 100).toISOString().slice(15, 23).split('.').join('')
      .split(':').join('');
    const totalTime = [time.slice(0, position), divider, time.slice(position, position * 2), divider, time.slice(position*2, position * 3)].join('');
    return totalTime;
  }

  const handleOnClick = () => {
    if (isPaused) {
      setisPaused(false);
    } else {
      setisPaused(true);
      timeSetter(actualTime);
      setActualTime(0);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isPaused) {
        setActualTime(actualTime + 0.01);
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [actualTime, isPaused]);

  return (
    <button
      type="button"
      className="button"
      onClick={handleOnClick}
    >
      {`${isPaused ? 'Play' : 'Stop'} ${getSeconds(actualTime)}`}
    </button>
  );
};

export default TimerButton;
