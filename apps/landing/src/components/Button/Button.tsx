import * as React from 'react';

interface componentNameProps {
   name: string;
}

export const Button = ({name}: componentNameProps) => {
  return (
      <button>{name}</button>
  );
};


