import { FC } from 'react';

interface ButtonProps {
  color?: string;
  className?: string;
  text: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  color,
  className,
  text,
  onClick,
}) => (
  <button onClick={onClick} className={className} color={color}>
    {text}
  </button>
);
