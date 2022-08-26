interface CounterProps {
  time: number;
  color: string;
  className?: string;
  fontSize?: string;
}

export const Counter: React.FC<CounterProps> = ({
  time,
  color,
  className,
  fontSize,
}) => {
  const convertTimeToHHMMSS = (time: number) => {
    return new Date(1970, 0, 0, 0, 0, time, 0).toLocaleTimeString();
  };

  return (
    <h2 color={color} className={className} font-size={fontSize}>
      {' '}
      {convertTimeToHHMMSS(time)}
    </h2>
  );
};
