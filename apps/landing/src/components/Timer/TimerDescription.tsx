import  React, {FC} from 'react';
interface TimerDectriptionProps {
  timerName?: string;
  color: string;
  className?: string;
}

export const TimerDescription: FC<TimerDectriptionProps> = ({
  timerName,
  color,
  className,
}) => (
  <h1 color={color} className={className}>
    {timerName}
  </h1>
);
