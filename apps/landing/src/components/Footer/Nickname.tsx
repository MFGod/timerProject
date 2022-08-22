import * as React from 'react';

interface NicknameProps {
  nickname: string;
}

export const Nickname: React.FC<NicknameProps> = ({ nickname }) => {
  return (
    <span>{nickname}</span>
  );
};
