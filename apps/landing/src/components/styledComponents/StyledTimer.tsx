import styled from 'styled-components';
import { Counter } from '../Timer/Counter';
import { Timer } from '../Timer/Timer';
import { TimerDescription } from '../Timer/TimerDescription';

export const StyledTimer = styled(Timer)`
  /*color: #ffd600;
   
  ${(props) => {
    switch (props.color) {
      case 'white':
        return 'color:#FFFFFF';

      case 'yellow':
        return 'color:#FFD600';
      default:
        return 'color:#fe2e2e';
    }
  }}; */
`;

  export const StyledCounter = styled(Counter)`
   color:#FFFFFF;
  `
  export const StyledTimerDescription = styled(TimerDescription)`
   color: yellow;
  `


