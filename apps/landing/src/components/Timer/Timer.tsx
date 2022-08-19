interface TimerProps {
  timerName?: string;
  time: number;
  color: string;
  className?: string;
}

export const Timer: React.FC<TimerProps> = ({
  timerName,
  time,
  color,
  className,
}) => {
  const convertTimeToHHMMSS = (time: number) => {
    return new Date(1970, 0, 0, 0, 0, time, 0).toLocaleTimeString();
  };

  return (
    <div>
      <h1>{timerName}</h1>
      <h2 className={className} color={color}>
        {convertTimeToHHMMSS(time)}
      </h2>
    </div>
  );
};
