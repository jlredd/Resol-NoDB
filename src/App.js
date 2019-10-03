import React from 'react';
import {HashRouter} from 'react-router-dom';
import './reset.css';
import './App.css';
import Router from './Router'
import Header from './components/Header/Header';
import styled from 'styled-components';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        { Router }
      </div>
    </HashRouter>
  );
}

export default App;
