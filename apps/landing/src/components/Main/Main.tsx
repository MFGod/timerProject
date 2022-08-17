import { Fragment } from 'react';
import { MyContext } from '../../app/app';
import { ButtonRow } from '../styledComponents/ButtonRow';
import { StyledButton } from '../styledComponents/StyledButton';
import { StyledMainButton } from '../styledComponents/StyledMain';
import { Timer } from '../Timer/Timer';


export const Main = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(props) => (
          <Fragment>
            <Timer timerName="Теория" time={props.time} />
            <Timer timerName="Практика" time={props.time} />
            <Timer time={props.time} />
            <StyledMainButton>
              <ButtonRow>
                <StyledButton onClick={props.handleStart}  text="Запуск"/>
                <StyledButton onClick={props.handleStop} text="Пауза"/>
              </ButtonRow>
              <ButtonRow>
                <StyledButton color="white" text="Изменить режим" />
                <StyledButton color="white" text="Закрыть сессию" />
              </ButtonRow>
            </StyledMainButton>
          </Fragment>
        )}
      </MyContext.Consumer>
    </div>
  );
};
