import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { StyledWrapper } from '../components/styledComponents/StyledWrapper';
import { GlobalStyle } from '../components/styledComponents/GlobalStyle';
interface AppContextInterface {
  handleStart?: () => void;
  handleStop?: () => void;
  changeMode?: () => void;
  count: number;
}

enum Mode {
  Theory = 'theory',
  Practice = 'practice',
}

export const MyContext = React.createContext<AppContextInterface>({count: 0});

export function App() {
  const [started, setStarted] = useState(false);
  const [mode, setMode] = useState(Mode.Theory);
  const [count, setCount] = useState<number>(0);



  useEffect(() => {
    const interval = setInterval(() => {
      if (started) {
        switch (mode) {
          case Mode.Theory:
            setCount((n) => n + 1);
            break;

          case Mode.Practice:
            setCount((n) => n - 1);
            break;
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [started, mode]);

  const handleStart = () => setStarted(true);

  const handleStop = () => setStarted(false);

  const changeMode = () => {
   handleStop();
   if (mode === Mode.Theory) setMode(Mode.Practice);
   else setMode(Mode.Theory);
  };

  return (
    <MyContext.Provider value={{ count, handleStart, handleStop, changeMode }}>
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
