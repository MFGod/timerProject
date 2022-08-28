import styled from 'styled-components';
import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../../app/app';
import { translation } from '../../translation/tranlations';
import { StyledButton } from '../Button/Button';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  width: 630px;
  gap: 10px;
  padding: 5px;
  margin: 10px;
`;

export const Header = () => {
  const themeProps = useContext(ThemeContext);
  const languageProps = useContext(LanguageContext);
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <StyledButton
          onClick={languageProps.changeLanguage}
          color="white"
          text={translation(languageProps.language, 'language')}
        />
        <StyledButton
          onClick={themeProps.changeTheme}
          color={'white' + themeProps.theme}
          text={translation(languageProps.language, 'theme')}
        />
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};
