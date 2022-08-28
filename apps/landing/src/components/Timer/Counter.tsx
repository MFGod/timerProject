import { FC } from 'react'; 
import styled from 'styled-components';

interface CounterProps {
  time: number;
  color: string;
  className?: string;
  fontSize?: string;
}

export const Counter: FC<CounterProps> = ({
  time,
  color,
  className,
  fontSize,
}) => {
  const convertTimeToHHMMSS = (time: number) => {
    return new Date(1970, 0, 0, 0, 0, time, 0).toLocaleTimeString();
  };

  return (
    <h2 color={color} className={className} font-size={fontSize}>
      {' '}
      {convertTimeToHHMMSS(time)}
    </h2>
  );
};


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