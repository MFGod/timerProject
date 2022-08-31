import { FC } from 'react';
import styled from 'styled-components';
import { StyledCounter } from './Counter';
import { TimerDescription } from './TimerDescription';

const StyledTimerDescription = styled(TimerDescription)`
  margin: 0px 0px 10px 0px;
  color: #ffd600;
`;

interface TimerProps {
  timerName?: string;
  time: number;
  color: string;
  className?: string;
}

export const Timer: FC<TimerProps> = ({
  timerName,
  time,
  color,
  className,
}) => {
  return (
    <div>
      <StyledTimerDescription
        color={color}
        timerName={timerName}
      />
      <StyledCounter
        time={time}
        className={className}
        color={color}
      />
    </div>
  );
};

export const PrimaryTimer = styled(Timer)`
   font-size: 96px;
   margin: 46px 0px 58px 15px;
`
export const SecondaryTimer = styled(Timer)`
   font-size: 32px;
   margin: 0px 10px 10px 0px;
`