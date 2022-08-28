import { FC } from 'react';
import styled from 'styled-components';
import { TimerDescription } from './TimerDescription';
import {
  StyledCounter,
} from '../styledComponents/StyledTimer';

const StyledTimerDescription = styled(TimerDescription)`
  margin: 0px 0px 10px 0px;
  color: #ffd600;
`;

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
