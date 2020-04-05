import React, { useState } from 'react'
import styled from 'styled-components';
import { useDrop } from "react-dnd";
import { ItemTypes } from '../constants'

const Square = (props) => {
  
  const [letter,setLetter] = useState(null)

  const [{isOver,canDrop}, drop] = useDrop({
    accept: ItemTypes.LETTER,
    drop: (item,monitor) => {
      setLetter(item.title)
      return { dropTarget: 'square' }
    },
    collect: mon => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
    }),
  });

  return (
    <SquareWrapper ref={drop} isOver={isOver} >{letter && letter}</SquareWrapper>
  )
}

export default Square;

const SquareWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.isOver ? 'red' : 'lightgray'};
    display:flex;
    align-items:center;
    justify-content:center;
`

