import * as React from 'react';

interface ButtonProps {
  color?: string;
  className?: string;
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  color,
  className,
  text,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className} color={color}>
      {text}
    </button>
  );
};
