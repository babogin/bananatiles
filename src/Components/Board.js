import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Square from './Square'

const BoardWrapper = styled.div`
    width: 50%;
    height: 60vh;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    border: 1px solid black;
`

function renderSquare(i) {
    const letter = "A"
  
    return (
      <div key={i} style={{ width: '12%', height: '12%', margin: '.25%' }}>
        <Square letter={letter}></Square>
      </div>
    )
  }

export default function Board(props) {
    const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i))
  }

  return (
    <React.Fragment>
        <BoardWrapper style={{
      }}>
            {squares}
        </BoardWrapper>
    </React.Fragment>
);
}

// const squares = []
// const letters = ['J','J','K','K','Q','Q','X','X','Z','Z','B','B','B','C','C','C','F','F','F','H','H','H','M','M','M','P','P','P','V','V','V','W','W','W','Y','Y','Y','G','G','G','G','L','L','L','L','L','D','D','D','D','D','D','S','S','S','S','S','S','U','U','U','U','U','U','N','N','N','N','N','N','N','N','T','T','T','T','T','T','T','T','T','R','R','R','R','R','R','R','R','R','O','O','O','O','O','O','O','O','O','O','O','I','I','I','I','I','I','I','I','I','I','I','I','A','A','A','A','A','A','A','A','A','A','A','A','A','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E']
// for (let i = 0; i < 12; i++) {
//   const letteri = Math.floor(Math.random()*letters.length)
//   const letter = letters.splice(letteri)
// squares.push(renderSquare(i, letter))
// }