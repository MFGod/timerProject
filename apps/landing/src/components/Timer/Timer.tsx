import * as React from 'react';

//import { TimerFunction } from './timerFunction';

interface TimerProps {
  timerName?: string;
  time:number;
}

export const Timer: React.FC<TimerProps> = ({ timerName, time }) => {

  return (
    <div>
      <h1>
         {timerName}
      </h1>
      <h2>
         {time}
      </h2>
    </div>
  );
};
