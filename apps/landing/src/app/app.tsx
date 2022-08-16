import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { StyledWrapper } from '../components/styledComponents/StyledWrapper';
import { GlobalStyle } from '../components/styledComponents/GlobalStyle';

export const MyContext = React.createContext(0);

export function App() {

   const [time, setTime] = useState(0);
   
   useEffect(() => {
      setInterval(()=>setTime((n)=> n+1), 1000)
   },[])
  return (
   <MyContext.Provider value={time}>
      <GlobalStyle/>
      <StyledWrapper>
         <Header/>
         <Main />
         <Footer nickname="@nickname" />
      </StyledWrapper>
      </MyContext.Provider>
  );
}

export default App;
