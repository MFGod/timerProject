import * as React from 'react';
import { Fragment } from 'react-is';
import { Button } from '../Button/button';
import { Timer } from '../Timer/Timer';



export const Main = () => {
  return (
   <>
      <Timer timerName='Теория' timer={Date()}/>
      <Timer timerName='Практика' timer={Date()}/>
      <Timer timer={Date()}/>
      <Button name='Запуск'/>
      <Button name='Пауза'/>
      <Button name='Изменить режим'/>
      <Button name='Закрыть сессию'/>
   </>
  );
};


