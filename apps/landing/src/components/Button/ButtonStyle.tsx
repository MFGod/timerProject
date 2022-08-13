import styled from 'styled-components';
import { Button } from './Button';
export const ButtonStyle = styled(Button)`
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
  display: table-cell;
  width: auto;
  height: 42px;
  padding: 12px 24px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;
