import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Square from './Square'


const Board = (props) =>  {
  //move to state storage / placeholder
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
        squares.push(null)
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
