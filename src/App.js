import React from 'react';
import './App.css';
import styled from 'styled-components';
import Pile from './Components/Pile.js';
import Board from './Components/Board.js';

const GameWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0
`

function App() {
  return (
    <GameWrapper className="App">
      <Board></Board>
      <Pile></Pile>
    </GameWrapper>
  );
}

export default App;