import React, { useState } from 'react'
import styled from 'styled-components';
import { useDrop, useDrag } from "react-dnd";
import { ItemTypes } from '../constants'

const Square = (props) => {
  
  const [letter,setLetter] = useState(null)

  const [{isOver,canDrop}, drop] = useDrop({
    accept: [ItemTypes.LETTER,ItemTypes.BOARD_LETTER],
    drop: (item,monitor) => {
      setLetter(item.title)
      return { dropTarget: 'square' }
    },
    collect: mon => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
    }),
  })

  const [{ isDragging, canDrag }, drag] = useDrag({
    item: { type: ItemTypes.BOARD_LETTER, title: letter },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        let dropResult = monitor.getDropResult();
        setLetter(null)
        
      }
    },
    canDrag: (monitor) => {
      return letter ? true : false
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      canDrag:monitor.canDrag()
    })
  })

  return (
    <div
      ref={drag}
      style={{
        height:'100%',
        width:'100%'
      }}
    >
      <SquareWrapper 
        ref={drop} 
        isOver={isOver}
        canDrag={canDrag} 
      >
        {letter && letter}
      </SquareWrapper>
    </div>
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
    cursor:${props => props.canDrag ? 'move' : ''}
`

