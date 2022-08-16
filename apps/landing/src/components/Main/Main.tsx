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
        {(time) => (
          <Fragment>
            <Timer timerName="Теория" time={time} />
            <Timer timerName="Практика"time={time} />
            <StyledMainButton>
              <ButtonRow>
                <StyledButton  text="Запуск" />
                {/*<StyledButton onClick={} text="Пауза" />*/}
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
