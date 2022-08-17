import { useEffect } from 'react';

interface TimerProps {
  timerName?: string;
  time: any;
}

// useEffect(() => {
//   const interval = setInterval(() => {
//     timerStart && setTime(time + 1);
//   }, 1000);
//   return () => {
//     clearInterval(interval);
//   };
// }, [time, timerStart]);

// const convertTimeToHHMMSS = (time: number) => {
//   return new Date(1970, 0, 0, 0, 0, time, 0).toLocaleTimeString();
// };

// const handleStart = () => {
//   setTimerStart(true);
// };
// const handleStop = () => {
//   setTimerStart(false);
// };

export const Timer: React.FC<TimerProps> = ({ timerName, time }) => {
  const convertTimeToHHMMSS = (time: number) => {
    return new Date(1970, 0, 0, 0, 0, time, 0).toLocaleTimeString();
  };

  return (
    <div>
      <h1>{timerName}</h1>
      <h2>{convertTimeToHHMMSS(time)}</h2>
    </div>
  );
};
