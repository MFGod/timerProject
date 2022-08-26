import { FC } from 'react';
import styled from 'styled-components';

export const StyledNickname = styled.span`
  color: #b40000;
`;

interface NicknameProps {
  nickname: string;
}



export const Nickname: FC<NicknameProps> = ({ nickname }) => <StyledNickname>{nickname}</StyledNickname>;

