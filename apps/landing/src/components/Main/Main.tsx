import { Fragment } from 'react';
import { MyContext } from '../../app/app';
import { ButtonRow } from '../styledComponents/ButtonRow';
import { StyledButton } from '../styledComponents/StyledButton';
import { StyledMainButton } from '../styledComponents/StyledMain';
import { StyledTimer } from '../styledComponents/StyledTimer';
import { StyledTimerWrapper } from '../styledComponents/StyledTimerWrapper';
import { TimerWrapper } from '../styledComponents/TimerWrapper';

export const Main = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(props) => (
          <Fragment>
            <TimerWrapper>
              <StyledTimerWrapper>
                <StyledTimer
                  color="white"
                  timerName="Теория"
                  time={props.theoryTime}
                />
                <StyledTimer
                  color="white"
                  timerName="Практика"
                  time={props.practiceTime}
                />
              </StyledTimerWrapper>
              <StyledTimer color="yellow" time={props.count} />
            </TimerWrapper>
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
