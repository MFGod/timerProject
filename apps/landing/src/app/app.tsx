import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { StyledWrapper } from '../components/styledComponents/StyledWrapper';
import { GlobalStyle } from '../components/styledComponents/GlobalStyle';




export function App() {
  return (
   <>
   <GlobalStyle/>
      <StyledWrapper>
         <Header/>
         <Main />
         <Footer nickname="@nickname" />
      </StyledWrapper>
   </>
  );
}

export default App;
