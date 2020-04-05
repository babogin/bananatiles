import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Square from './Square'


const Board = (props) =>  {
  //move to state storage / placeholder
  const letter = "A"
  const rowWidth = 8
  const rowsCount = 8

  const [boardTiles,setBoardTiles] = useState(null)

  useEffect(() => {
    createBoard()
  },[])

  

  const createBoard = () => {
    const rows = []
    for (let i = 0; i < rowsCount; i++) {
      let squares = []  
      for (let j = 0; j < rowWidth; j++){
        //each square will probably be an object with letter and more info?
        squares.push(letter)
      }
      rows.push(squares)
    }
    setBoardTiles(rows)
  }

  return (
    <BoardWrapper>
        {boardTiles && boardTiles.map((row,i) => (
          row.map((square,j) => ( 
            <div key={`row${i}column${j}`} style={{ width: '12%', height: '12%', margin: '.25%' }}>
              <Square letter={square}></Square>
            </div>
          ))))}
    </BoardWrapper>
  )
}

export default Board;

const BoardWrapper = styled.div`
    width: 50%;
    height: 60vh;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5vh;
`


// const squares = []
// const letters = ['J','J','K','K','Q','Q','X','X','Z','Z','B','B','B','C','C','C','F','F','F','H','H','H','M','M','M','P','P','P','V','V','V','W','W','W','Y','Y','Y','G','G','G','G','L','L','L','L','L','D','D','D','D','D','D','S','S','S','S','S','S','U','U','U','U','U','U','N','N','N','N','N','N','N','N','T','T','T','T','T','T','T','T','T','R','R','R','R','R','R','R','R','R','O','O','O','O','O','O','O','O','O','O','O','I','I','I','I','I','I','I','I','I','I','I','I','A','A','A','A','A','A','A','A','A','A','A','A','A','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E']
// for (let i = 0; i < 12; i++) {
//   const letteri = Math.floor(Math.random()*letters.length)
//   const letter = letters.splice(letteri)
// squares.push(renderSquare(i, letter))
// }