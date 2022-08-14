import * as React from 'react';

interface TimerProps {
  timerName?: string;
  timer: Date;
}

export const Timer: React.FC<TimerProps> = ({ timerName, timer }) => {
  return (
    <>
      <h1>{timerName}</h1>
      <p>{timer.toLocaleTimeString()}</p>
    </>
  );
};
