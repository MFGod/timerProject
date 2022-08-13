import * as React from 'react';

interface componentNameProps {
  color?: string;
  className?: string;
  text: string;
}

export const Button = ({ color, className, text }: componentNameProps) => {
  return (
    <button className={className} color={color}>
      {text}
    </button>
  );
};
