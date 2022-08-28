import { FC, useContext } from 'react';
import { LanguageContext } from '../../app/app';

import styled from 'styled-components';
import { translation } from '../../translation/tranlations';

const StyledNickname = styled.span`
  color: #b40000;
`;
const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 214, 0, 1);
`;

interface FooterProps {
  nickname: string;
}

export const Footer: FC<FooterProps> = ({ nickname }) => {
  const languageProps = useContext(LanguageContext);
  return (
    <StyledFooter>
      {translation(languageProps.language, 'contacts')}
      <StyledNickname>{nickname}</StyledNickname>
    </StyledFooter>
  );
};
