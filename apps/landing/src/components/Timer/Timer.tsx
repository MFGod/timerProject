
interface TimerProps {
  timerName?: string;
  time: number;
}

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
