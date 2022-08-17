// import { time } from 'console';
// import * as React from 'react';
// import { useState, useEffect } from 'react';

// interface TimerFunctionProps {
//   time: number;
//   timerStart: boolean;
// }

// export const TimerFunction: React.FC<TimerFunctionProps> = ({
//   time,
//   timerStart,
// }) => {
//   const [time, setTime] = useState(0);
//   const [timerStart, setTimerStart] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       timerStart && setTime(time + 1);
//     }, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, [time, timerStart]);

//   const convertTimeToHHMMSS = (time: number) => {
//     return new Date(1970, 0, 0, 0, 0, time, 0).toLocaleTimeString();
//   };

//   const handleStart = () => {
//     setTimerStart(true);
//   };
//   const handleStop = () => {
//     setTimerStart(false);
//   };

//   return (
//     <timerFunction.Consumer>
//       {(context) => <p>{convertTimeToHHMMSS(time)}</p>}
//     </timerFunction.Consumer>
//   );
// };
