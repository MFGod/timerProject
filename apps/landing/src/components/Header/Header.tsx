
import { StyledButton } from '../styledComponents/StyledButton';
import { LanguageContext, ThemeContext } from '../../app/app';
import { StyledHeader } from '../styledComponents/StyledHeader';
import { Language } from '../../app/app';
import { StyledHeaderWrapper } from '../styledComponents/StyledHeaderWrapper';

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
                props.language === Language.RU ? 'Язык - RU' : 'Language - ENG'
              }
            />
            <StyledButton
            onClick={themeProps.changeTheme}
              color={"white" + themeProps.theme}
              text={props.language === Language.RU ? 'Тема' : 'Theme'}
              
            />
          </StyledHeaderWrapper>
        </StyledHeader>
          )}
        </ThemeContext.Consumer>
      )}
    </LanguageContext.Consumer>
  );
};
