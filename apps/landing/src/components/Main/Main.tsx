import { Fragment } from 'react';
import { TimerContext } from '../../app/app';
import { ButtonRow } from '../styledComponents/ButtonRow';
import { StyledButton } from '../styledComponents/StyledButton';
import { StyledMainButton } from '../styledComponents/StyledMain';
import { StyledTimer } from '../styledComponents/StyledTimer';
import { StyledTimerWrapper } from '../styledComponents/StyledTimerWrapper';
import { TimerWrapper } from '../styledComponents/TimerWrapper';
import { LanguageContext } from '../../app/app';
import { Language } from '../../app/app';
export const Main = () => {
  return (
    <div>
      <TimerContext.Consumer>
        {(timerProps) => (
          <LanguageContext.Consumer>
            {(languageProps) => (
              <Fragment>
                <TimerWrapper>
                  <StyledTimerWrapper>
                    <StyledTimer
                      color="white"
                      timerName={
                        languageProps.language === Language.RU
                          ? 'Теория'
                          : 'Theory'
                      }
                      time={timerProps.theoryTime}
                    />
                    <StyledTimer
                      color="white"
                      timerName={
                        languageProps.language === Language.RU
                          ? 'Практика'
                          : 'Practice'
                      }
                      time={timerProps.practiceTime}
                    />
                  </StyledTimerWrapper>
                  <StyledTimer
                    fontSize="96px"
                    color="yellow"
                    time={timerProps.count}
                  />
                </TimerWrapper>
                <StyledMainButton>
                  <ButtonRow>
                    <StyledButton
                      onClick={timerProps.handleStart}
                      text={
                        languageProps.language === Language.RU
                          ? 'Запуск'
                          : 'Start'
                      }
                    />
                    <StyledButton
                      onClick={timerProps.handleStop}
                      text={
                        languageProps.language === Language.RU
                          ? 'Пауза'
                          : 'Pause'
                      }
                    />
                  </ButtonRow>
                  <ButtonRow>
                    <StyledButton
                      onClick={timerProps.changeMode}
                      color="white"
                      text={
                        languageProps.language === Language.RU
                          ? 'Изменить режим'
                          : 'Change mode'
                      }
                    />
                    <StyledButton
                      onClick={timerProps.closeSession}
                      color="white"
                      text={
                        languageProps.language === Language.RU
                          ? 'Закрыть сессию'
                          : 'Close Session'
                      }
                    />
                  </ButtonRow>
                </StyledMainButton>
              </Fragment>
            )}
          </LanguageContext.Consumer>
        )}
      </TimerContext.Consumer>
    </div>
  );
};
