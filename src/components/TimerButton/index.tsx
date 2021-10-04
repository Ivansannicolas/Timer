import React, { useEffect, useState } from 'react';
import './styles.css';

interface Props {
  timeSetter: Function;
}

const TimerButton: React.FC<Props> = ({ timeSetter }) => {
  const [actualTime, setActualTime] = useState<number>(0);

  function getSeconds(seconds: number) {
    const totalTime: string = new Date(seconds * 1000).toISOString().substr(11, 8);
    return totalTime;
  }

  useEffect(() => {
    const addSecond = () => {
      setActualTime(actualTime + 1);
      return 1;
    }
    setTimeout(addSecond, 1000)
  }, [actualTime])

  return (
    <button type="button" className="button" onClick={() => timeSetter(actualTime)}>
      {`Play ${getSeconds(actualTime)}`}
    </button>
  )
}

export default TimerButton;