import * as React from 'react';
import { Fragment } from 'react-is';
import { Button } from '../Button/Button';
import { Timer } from '../Timer/Timer';

export const Main = () => {
  return (
    <>
      <Timer timerName="Теория" timer={new Date()} />
      <Timer timerName="Практика" timer={new Date()} />
      <Timer timer={new Date()} />
      <Button text="Запуск" />
      <Button text="Пауза" />
      <Button text="Изменить режим" />
      <Button text="Закрыть сессию" />
    </>
  );
};
