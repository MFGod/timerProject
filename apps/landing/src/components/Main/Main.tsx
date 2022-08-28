import styled from 'styled-components';
import { Fragment } from 'react';
import { ThemeContext, TimerContext } from '../../app/app';
import { StyledButton } from '../styledComponents/StyledButton';
import { StyledTimer } from '../styledComponents/StyledTimer';
import { LanguageContext } from '../../app/app';
import { translation } from '../../translation/tranlations';

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px;
  margin: 10px;
`;

const StyledMainButton = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

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
                    <ThemeContext.Consumer>
                      {(themeProps) => (
                        <>
                          <StyledTimer
                            color={String(themeProps.theme)}
                            timerName={translation(
                              languageProps.language,
                              'theory'
                            )}
                            time={timerProps.theoryTime}
                          />
                          <StyledTimer
                            color={String(themeProps.theme)}
                            timerName={translation(
                              languageProps.language,
                              'practice'
                            )}
                            time={timerProps.practiceTime}
                          />
                        </>
                      )}
                    </ThemeContext.Consumer>
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
                      text={translation(languageProps.language, 'start')}
                    />
                    <StyledButton
                      onClick={timerProps.handleStop}
                      text={translation(languageProps.language, 'pause')}
                    />
                  </ButtonRow>
                  <ButtonRow>
                    <StyledButton
                      onClick={timerProps.changeMode}
                      color="white"
                      text={translation(languageProps.language, 'changeMode')}
                    />
                    <StyledButton
                      onClick={timerProps.closeSession}
                      color="white"
                      text={translation(languageProps.language, 'closeSession')}
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
