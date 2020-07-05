import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { UpdatePanel } from './components/UpdatePanel';
import { GraphContainer } from './components/GraphContainer';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <section className="mainSection">
        <GlobalProvider>
          <GraphContainer></GraphContainer>
          <UpdatePanel></UpdatePanel>
        </GlobalProvider>
      </section>

    </>
  );
}

export default App;
