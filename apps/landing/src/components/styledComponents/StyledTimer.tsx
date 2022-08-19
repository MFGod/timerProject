import styled from 'styled-components';
import { Timer } from '../Timer/Timer';

export const StyledTimer = styled(Timer)`
  color: #ffd600;
  ${(props) => {
    switch (props.color) {
      case 'white':
        return 'color:#FFFFFF';

      case 'yellow':
        return 'color:#FFD600';
      default:
        return 'color:#fe2e2e';
    }
  }};
`;
