import React from 'react';
import {HashRouter} from 'react-router-dom';
import './reset.css';
import './App.css';
import Router from './Router'
import Header from './components/Header/Header';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <HashRouter>
      <MainContainer className="App">
        <Header />
        { Router }
        <Footer />
      </MainContainer>
    </HashRouter>
  );
}

export default App;

const MainContainer = styled.section`
  font-family: 'Verdana';
`