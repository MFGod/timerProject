import * as React from 'react';
import { Button } from '../Button/Button';
import { ButtonStyle } from '../Button/ButtonStyle';
import { StyledHeader } from '../styledComponents/StyledHeader';
export const Header = () => {
  return (
    <StyledHeader>
      <ButtonStyle color="white" text="ЯЗЫК - RU" />
      <ButtonStyle color="white" text="ТЕМА" />
    </StyledHeader>
  );
};
