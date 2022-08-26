interface TimerDectriptionProps {
  timerName?: string;
  color: string;
  className?: string;
}

export const TimerDescription: React.FC<TimerDectriptionProps> = ({
  timerName,
  color,
  className,
}) => {
  return (
    <h1 color={color} className={className}>
      {timerName}
    </h1>
  );
};
