import  React, {FC} from 'react';

import {
  StyledCounter,
  StyledTimerDescription,
} from '../styledComponents/StyledTimer';

interface TimerProps {
  timerName?: string;
  time: number;
  color: string;
  className?: string;
  fontSize?: string;
}

export const Timer: FC<TimerProps> = ({
  timerName,
  time,
  color,
  className,
  fontSize,
}) => {
  return (
    <div>
      <StyledTimerDescription
        font-size={fontSize}
        color={color}
        timerName={timerName}
      />
      <StyledCounter
        font-size={fontSize}
        time={time}
        className={className}
        color={color}
      />
    </div>
  );
};
