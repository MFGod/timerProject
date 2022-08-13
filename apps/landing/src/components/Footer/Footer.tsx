import * as React from 'react';


interface FooterProps {
   nickname: string;
}

export const Footer: React.FC<FooterProps> = ({nickname}) => {
  return (
   <h1>Вы можете связаться со мной в telegram {nickname}</h1>
  );
};
