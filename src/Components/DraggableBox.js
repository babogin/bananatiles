import React, { useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import Tile from './Tile'
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
  const { id, title, left, top } = props
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'box', id, left, top, title },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  useEffect(() => {
    
  }, [])
  return (
    <div ref={drag} style={getStyles(left, top, isDragging)}>
      <Tile title={title} />
    </div>
  )
}
export default DraggableBox
