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
  theoryTime: number;
  practiceTime: number;
}

enum Mode {
  Theory = 'theory',
  Practice = 'practice',
}

export const MyContext = React.createContext<AppContextInterface>({
  count: 0,
  theoryTime: 0,
  practiceTime: 0,
});

export function App() {
  const [started, setStarted] = useState(false);
  const [mode, setMode] = useState(Mode.Theory);
  const [count, setCount] = useState<number>(0);
  const [theoryTime, setTheoryTime] = useState<number>(0);
  const [practiceTime, setPracticeTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (started) {
        switch (mode) {
          case Mode.Theory:
            setCount((n) => n + 1);
            setTheoryTime((n) => n + 1);
            break;

          case Mode.Practice:
            if (count > 0) {
              setCount((n) => n - 1);
              setPracticeTime(practiceTime);
            }
            break;
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [started, mode, count]);
  // if (timerStart && isSessionToggled) {
  //   if (time) {
  //     setTime(time - 1);
  //     setPracticeTime(practiceTime - 1);
  //   }
  // } else if (timerStart && !isSessionToggled) {
  //   setTime((n) => n + 1);
  //   setTheoryTime((n) => n + 1);
  // }
  const handleStart = () => setStarted(true);

  const handleStop = () => setStarted(false);

  const changeMode = () => {
    handleStop();
    if (mode === Mode.Practice) {
      setMode(Mode.Theory);
      setPracticeTime(practiceTime);
      setCount(theoryTime);
    } else {
      setMode(Mode.Practice);
      setPracticeTime(count * 3);
      setCount(count * 3);
    }

    //   if (props.isSessionToggled) {
    //     props.setPracticeTime(props.theoryTime);
    //     props.setTime(props.theoryTime);
    //   } else {
    //     props.setTime(Number(props.time) * 3);
    //     props.setPracticeTime(Number(props.time) * 3);
    //   }
    //
    //
    // }}
  };

  return (
    <MyContext.Provider
      value={{
        count,
        handleStart,
        handleStop,
        changeMode,
        theoryTime,
        practiceTime,
      }}
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
