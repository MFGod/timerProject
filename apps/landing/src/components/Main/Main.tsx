import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext, TimerContext } from '../../app/app';
import { LanguageContext } from '../../app/app';
import { StyledButton } from '../Button/Button';
import { Timer } from '../Timer/Timer';
import { translation } from '../../translation/tranlations';

const PrimaryTimer = styled(Timer)`
  font-size: 96px;
  margin: 46px 0px 58px 15px;
`;
const SecondaryTimer = styled(Timer)`
  font-size: 32px;
  margin: 0px 10px 10px 0px;
`;

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
  const themeProps = useContext(ThemeContext);
  const timerProps = useContext(TimerContext);
  const languageProps = useContext(LanguageContext);

  return (
    <div>
      <TimerWrapper>
        <StyledTimerWrapper>
          <>
            <SecondaryTimer
              color={String(themeProps.theme)}
              timerName={translation(languageProps.language, 'theory')}
              time={timerProps.theoryTime}
            />
            <SecondaryTimer
              color={String(themeProps.theme)}
              timerName={translation(languageProps.language, 'practice')}
              time={timerProps.practiceTime}
            />
          </>
        </StyledTimerWrapper>
        <PrimaryTimer color="yellow" time={timerProps.count} />
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
    </div>
  );
};
