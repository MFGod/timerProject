import * as React from 'react';

interface TimerProps {
   timerName?: string;
   timer: string;
}

export const Timer = ({timerName, timer}: TimerProps) => {
  return (
    <>
      <h1>{timerName}</h1>
      <p>{timer}</p>
    </>
  );
};
