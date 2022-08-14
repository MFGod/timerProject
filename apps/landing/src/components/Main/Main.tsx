import * as React from 'react';
import { ButtonRow } from '../styledComponents/ButtonRow';
import { StyledButton } from '../styledComponents/StyledButton';
import { StyledMainButton } from '../styledComponents/StyledMain';
import { Timer } from '../Timer/Timer';

export const Main = () => {
  return (
    <div>
      <Timer timerName="Теория" timer={new Date()} />
      <Timer timerName="Практика" timer={new Date()} />
      <Timer timer={new Date()} />
      <StyledMainButton>
         <ButtonRow>
            <StyledButton text="Запуск" />
            <StyledButton text="Пауза" />
         </ButtonRow>
         <ButtonRow>
            <StyledButton color="white" text="Изменить режим" />
            <StyledButton color="white" text="Закрыть сессию" />
         </ButtonRow>
      </StyledMainButton>
    </div>
  );
};
