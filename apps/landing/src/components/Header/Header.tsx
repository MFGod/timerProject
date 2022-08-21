import { useState } from 'react';
import { StyledButton } from '../styledComponents/StyledButton';
import { LanguageContext } from '../../app/app';
import { StyledHeader } from '../styledComponents/StyledHeader';
import { Language } from '../../app/app';
import { StyledHeaderWrapper } from '../styledComponents/StyledHeaderWrapper';
export const Header = () => {
  return (
    <LanguageContext.Consumer>
      {(props) => (
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
              color="white"
              text={props.language === Language.RU ? 'Тема' : 'Theme'}
            />
          </StyledHeaderWrapper>
        </StyledHeader>
      )}
    </LanguageContext.Consumer>
  );
};
