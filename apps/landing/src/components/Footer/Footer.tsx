import * as React from 'react';
import { StyledFooter } from '../styledComponents/StyledFooter';
import { LanguageContext } from '../../app/app';
import { Language } from '../../app/app';
//text={props.language === Language.RU ? 'Тема' : 'Theme'}
interface FooterProps {
  nickname: string;
}

export const Footer: React.FC<FooterProps> = ({ nickname }) => {
  return (
    <LanguageContext.Consumer>
      {(props) => (
        <StyledFooter>
          {props.language === Language.RU
            ? `Вы можете связаться со мной в telegram ${nickname}`
            : `Contact me via telegram ${nickname}`}
        </StyledFooter>
      )}
    </LanguageContext.Consumer>
  );
};
