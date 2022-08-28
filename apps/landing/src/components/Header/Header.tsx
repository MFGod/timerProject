import styled from 'styled-components';
import { StyledButton } from '../styledComponents/StyledButton';
import { LanguageContext, ThemeContext } from '../../app/app';
import { translation } from '../../translation/tranlations';

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
  return (
    <LanguageContext.Consumer>
      {(props) => (
        <ThemeContext.Consumer>
          {(themeProps) => (
            <StyledHeader>
              <StyledHeaderWrapper>
                <StyledButton
                  onClick={props.changeLanguage}
                  color="white"
                  text={
                   translation(props.language, 'language')
                  }
                />
                <StyledButton
                  onClick={themeProps.changeTheme}
                  color={'white' + themeProps.theme}
                  text={ translation(props.language, 'theme')}
                />
              </StyledHeaderWrapper>
            </StyledHeader>
          )}
        </ThemeContext.Consumer>
      )}
    </LanguageContext.Consumer>
  );
};
