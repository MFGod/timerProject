import { FC } from 'react';
import { LanguageContext } from '../../app/app';
import { StyledNickname } from './Nickname';
import styled from 'styled-components';
import { translation } from '../../translation/tranlations';

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
  return (
    <LanguageContext.Consumer>
      {(props) => (
        <StyledFooter>
          {translation(props.language, 'contacts')}
          <StyledNickname>{nickname}</StyledNickname>
        </StyledFooter>
      )}
    </LanguageContext.Consumer>
  );
};
