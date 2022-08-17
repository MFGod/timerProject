import { Fragment } from 'react';
import { MyContext } from '../../app/app';
import { ButtonRow } from '../styledComponents/ButtonRow';
import { StyledButton } from '../styledComponents/StyledButton';
import { StyledMainButton } from '../styledComponents/StyledMain';
import { Timer } from '../Timer/Timer';
//import { MyContext } from '../Timer/timerFunction';

export const Main = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(props) => (
          <Fragment>
            <Timer timerName="Теория" time={props.time} />
            <Timer timerName="Практика" time={props.time} />
            <StyledMainButton>
              <ButtonRow>
                <StyledButton
                  onClick={() => {
                    props.setTimerStart(true);
                  }}
                  text="Запуск"
                />
                <StyledButton
                  onClick={() => {
                    props.setTimerStart(false);
                  }}
                  text="Пауза"
                />
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
