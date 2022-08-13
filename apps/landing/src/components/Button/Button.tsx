import * as React from 'react';

interface ButtonProps {
  color?: string;
  className?: string;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ color, className, text }) => {
  return (
    <button className={className} color={color}>
      {text}
    </button>
  );
};
