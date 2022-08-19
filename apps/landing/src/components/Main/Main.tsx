import { Fragment } from 'react';
import { MyContext } from '../../app/app';
import { ButtonRow } from '../styledComponents/ButtonRow';
import { StyledButton } from '../styledComponents/StyledButton';
import { StyledMainButton } from '../styledComponents/StyledMain';
import { Timer } from '../Timer/Timer';
import { StyledTimer } from '../styledComponents/StyledTimer';
export const Main = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(props) => (
          <Fragment>
            <StyledTimer
              color="yellow"
              timerName="Теория"
              time={props.theoryTime}
            />
            <StyledTimer
              color="yellow"
              timerName="Практика"
              time={props.practiceTime}
            />
            <StyledTimer color="yellow" time={props.count} />
            <StyledMainButton>
              <ButtonRow>
                <StyledButton onClick={props.handleStart} text="Запуск" />
                <StyledButton onClick={props.handleStop} text="Пауза" />
              </ButtonRow>
              <ButtonRow>
                <StyledButton
                  onClick={props.changeMode}
                  color="white"
                  text="Изменить режим"
                />
                <StyledButton color="white" text="Закрыть сессию" />
              </ButtonRow>
            </StyledMainButton>
          </Fragment>
        )}
      </MyContext.Consumer>
    </div>
  );
};
