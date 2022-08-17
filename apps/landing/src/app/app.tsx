import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { StyledWrapper } from '../components/styledComponents/StyledWrapper';
import { GlobalStyle } from '../components/styledComponents/GlobalStyle';
interface AppContextInterface {
  time?: number;
  setTimerStart?: any;
}
export const MyContext = React.createContext<AppContextInterface>({});

export function App() {
  const [time, setTime] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => timerStart && setTime((n) => n + 1), 10);
    return () => {
      clearInterval(interval);
    };
  }, [time, timerStart]);

  return (
    <MyContext.Provider value={{ time, setTimerStart }}>
      <GlobalStyle />
      <StyledWrapper>
        <Header />
        <Main />
        <Footer nickname="@nickname" />
      </StyledWrapper>
    </MyContext.Provider>
  );
}

export default App;
