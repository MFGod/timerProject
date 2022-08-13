import * as React from 'react';
import { StyledButton } from '../styledComponents/StyledButton';
import { StyledMainButton } from '../styledComponents/StyledMain';
import { Timer } from '../Timer/Timer';

export const Main = () => {
  return (
    <main>
      <Timer timerName="Теория" timer={new Date()} />
      <Timer timerName="Практика" timer={new Date()} />
      <Timer timer={new Date()} />
      <StyledMainButton>
         <StyledButton text="Запуск" />
         <StyledButton text="Пауза" />
         <StyledButton color="white" text="Изменить режим" />
         <StyledButton color="white" text="Закрыть сессию" />
      </StyledMainButton>
    </main>
  );
};
