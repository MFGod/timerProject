import { useState } from 'react';
import { StyledButton } from '../styledComponents/StyledButton';

import { StyledHeader } from '../styledComponents/StyledHeader';

export const Header = () => {
  const changeLanguage = (language: string) => {
    language === 'ЯЗЫК - RU'
      ? setLanguage('LANGUAGE - EN')
      : setLanguage('ЯЗЫК - RU');
  };
  const [language, setLanguage] = useState('ЯЗЫК - RU');

  return (
    <StyledHeader>
      <StyledButton
        onClick={() => changeLanguage(language)}
        color="white"
        text={`${language}`}
      />
      <StyledButton color="white" text="ТЕМА" />
    </StyledHeader>
  );
};
