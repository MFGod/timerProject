import { StyledCounter, StyledTimerDescription } from "../styledComponents/StyledTimer";

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

  return (
      <div>
         <StyledTimerDescription color={color} timerName={timerName}/>
         <StyledCounter time={time} className={className} color={color}/>
      </div>
  );
};
