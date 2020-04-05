import React, { useEffect } from 'react'
import { useDrag } from 'react-dnd'
import Tile from './Tile'
import {ItemTypes} from '../constants'

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0.8 : 1,
    height: isDragging ? '' : '',
  }
}

const DraggableBox = (props) => {
  const { id, title, left, top, deleteFunc } = props
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.LETTER, id, left, top, title },
    end: (item, monitor) => {
      if (monitor.didDrop()){
        let dropResult = monitor.getDropResult();
      
        if (dropResult.dropTarget === 'pile'){
            //do nothing for now
        } else if (dropResult.dropTarget === 'square'){
          deleteFunc(id)
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  
  return (
    <div ref={drag} style={getStyles(left, top, isDragging)}>
      <Tile title={title} />
    </div>
  )
}
export default DraggableBox
