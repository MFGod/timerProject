import { FC } from 'react';
import { StyledFooter } from '../styledComponents/StyledFooter';
import { LanguageContext } from '../../app/app';
import { Language } from '../../app/app';
import { StyledNickname } from './Nickname';

//text={props.language === Language.RU ? 'Тема' : 'Theme'}
interface FooterProps {
  nickname: string;
}

export const Footer: FC<FooterProps> = ({ nickname }) => {
  return (
    <LanguageContext.Consumer>
      {(props) => (
        <StyledFooter>
          {props.language === Language.RU
            ? `Вы можете связаться со мной в telegram \u00A0`
            : `Contact me via telegram \u00A0`}
          <StyledNickname>{nickname}</StyledNickname>
        </StyledFooter>
      )}
    </LanguageContext.Consumer>
  );
};
