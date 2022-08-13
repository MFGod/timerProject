import * as React from 'react';
import { StyledFooter } from '../styledComponents/StyledFooter';


interface FooterProps {
   nickname: string;
}

export const Footer: React.FC<FooterProps> = ({nickname}) => {
  return (
   <StyledFooter>Вы можете связаться со мной в telegram {nickname}</StyledFooter>
  );
};
