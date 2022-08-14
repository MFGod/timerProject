import styled from 'styled-components';
import { Button } from '../Button/Button';

export const StyledButton = styled(Button)`
  ${(props) => {
    switch (props.color) {
      case 'red':
        return 'background:#B40000; color:#F5F5F5';
      case 'white':
        return 'background:#F5F5F5; color:#181818';
      default:
        return 'background:#B40000; color:#F5F5F5';
    }
  }};

  height: 42px;
  padding: 12px 24px;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;
