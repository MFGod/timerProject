import styled from 'styled-components';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

import { Main } from '../components/Main/Main';
//import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Header/>
      <Main/>
      <Footer nickname='@nickname'/>
      {/*<NxWelcome title="landing" />*/}
    </StyledApp>
  );
}

export default App;
