import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { StyledWrapper } from '../components/styledComponents/StyledWrapper';
import { GlobalStyle } from '../components/styledComponents/GlobalStyle';
interface AppContextInterface {
  time?: number;
  setTimerStart?: (value: React.SetStateAction<boolean>) => void;
  handleStart?: () => void;
  handleStop?: () => void;
}
export const MyContext = React.createContext<AppContextInterface>({});

export function App() {
  const [time, setTime] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  const [teory, setTeory] = useState(0);
  const [practice, setPractice] = useState(2);

   setTeory(time);
   setPractice(teory * 3)

  useEffect(() => {
    //if (!time) {
    //   setTimerStart(false)
    //}
    const interval = setInterval(() => timerStart && setTime(time + 1), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time, timerStart]);

  const handleStart = () => {
    setTimerStart((timerStart) => true);
  };
  const handleStop = () => {
    setTimerStart((timerStart) => false);
  };

  return (
    <MyContext.Provider
      value={{ time, setTimerStart, handleStart, handleStop }}
    >
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
