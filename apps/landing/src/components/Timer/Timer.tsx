import * as React from 'react';
import { useState, useEffect } from 'react';
interface TimerProps {
  timerName?: string;
  timer: Date;
}

export const Timer: React.FC<TimerProps> = ({ timerName, timer }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 1);
    return () => {
      clearInterval(interval);
    };
  });

  const convertTimeToHHMMSS = (time: number) => {
    return new Date(1970, 0, 0, 0, 0, time, 0).toLocaleTimeString();
  };
  return (
    <>
      <h1>{timerName}</h1>
      <p>{convertTimeToHHMMSS(time)}</p>
    </>
  );
};
