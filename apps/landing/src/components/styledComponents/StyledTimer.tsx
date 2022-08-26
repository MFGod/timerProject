import styled from 'styled-components';
import { Counter } from '../Timer/Counter';
import { Timer } from '../Timer/Timer';
import { TimerDescription } from '../Timer/TimerDescription';

export const StyledTimer = styled(Timer)`
  ${(props) => {
    switch (props.fontSize) {
      case '96px':
        return 'font-size: 96px; margin: 56px 10px 68px 10px';
      default:
        return 'font-size: 32px;  margin: 0px 0px 10px 0px';
    }
  }};
`;

export const StyledCounter = styled(Counter)`
  color: #ffffff;
  ${(props) => {
    switch (props.color) {
      case 'yellow':
        return 'color:#FFD600';
      case 'WhiteTheme':
        return 'color:#181818';
      case 'BlackTheme':
        return 'color: #F5F5F5';
      default:
        return 'color:#181818';
    }
  }};
`;
export const StyledTimerDescription = styled(TimerDescription)`
  margin: 0px 0px 10px 0px;
  color: #ffd600;
`;
