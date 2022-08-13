import * as React from 'react';


interface FooterProps {
   nickname: string;
}

export const Footer  = ({nickname}:FooterProps) => {
  return (
   <h1>Вы можете связаться со мной в telegram {nickname}</h1>
  );
};
