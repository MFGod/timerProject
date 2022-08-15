import * as React from 'react';
import { useState, useEffect } from 'react';
interface TimerProps {
  timerName?: string;
  timer: Date;
}

export const Timer: React.FC<TimerProps> = ({ timerName, timer }) => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [timerOn, setTimeOn] = React.useState(false);
  // var totalSeconds = 0;

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTotalSeconds((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  // function setTime() {
  //   ++totalSeconds;
  //   secondsLabel.innerHTML = pad(totalSeconds % 60);
  //   minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  // }
  // function pad(val) {
  //   var valString = String(val);
  //   if (valString.length < 2) {
  //     return "0" + valString;
  //   } else {
  //     return valString;
  //   }
  // }
  const convertToHHMMSS = () => {
    const valueString = '';
  };
  return (
    <>
      <button onClick={() => setTimeOn(true)}>start</button>
      <h1>{timerName}</h1>
      <p>{totalSeconds}</p>
    </>
  );
};
