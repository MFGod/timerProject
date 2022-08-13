import * as React from 'react';
import { StyledButton } from '../styledComponents/StyledButton';

import { StyledHeader } from '../styledComponents/StyledHeader';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledButton color="white" text="ЯЗЫК - RU" />
      <StyledButton color="white" text="ТЕМА" />
    </StyledHeader>
  );
};
