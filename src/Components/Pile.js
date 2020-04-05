import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Tile from './Tile.js'

import { useDrop } from "react-dnd";
import DraggableBox from "./DraggableBox";
import doSnapToGrid from "./snapToGrid";
import update from "immutability-helper";


    

    

    

    // return (
    //     <PileWrapper>
    //         {
    //             lettersPile && lettersPile.map(letter => (
    //                 <Tile letter={letter}></Tile>
    //             ))
    //         }
    //     </PileWrapper>
    // )



const PileWrapper = styled.div`
    height: 33vh;
    border: 1px solid black;
    display:flex;
    flex-wrap:wrap;
`



function renderBox(item, key) {
  return <DraggableBox key={key} id={key} {...item} />;
}



const Pile = ({ snapToGrid }) => {

    const startingTileCount = 15
    const letters = ['J', 'J', 'K', 'K', 'Q', 'Q', 'X', 'X', 'Z', 'Z', 'B', 'B', 'B', 'C', 'C', 'C', 'F', 'F', 'F', 'H', 'H', 'H', 'M', 'M', 'M', 'P', 'P', 'P', 'V', 'V', 'V', 'W', 'W', 'W', 'Y', 'Y', 'Y', 'G', 'G', 'G', 'G', 'L', 'L', 'L', 'L', 'L', 'D', 'D', 'D', 'D', 'D', 'D', 'S', 'S', 'S', 'S', 'S', 'S', 'U', 'U', 'U', 'U', 'U', 'U', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'];
    // const alphabet = ['a','b','c','d']
    const [lettersPile,setLettersPile] = useState(null)
    
    const generatePile = () => {
        //need to move to server side if all players pull from same pile
        let lettersCopy = [...letters]
        const lettersPileTemp = {}
    
        for (let i = 0; i < startingTileCount; i++) {
            const randIndex = Math.floor(Math.random() * (letters.length - i))
            const letter = lettersCopy[randIndex]
            lettersPileTemp[i] = {top: 0, left: i*100, title: letter}
            lettersCopy.splice(randIndex,1)
        }
        return lettersPileTemp
    }


  const [boxes, setBoxes] = useState( () => generatePile()  );
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top }
          }
        })
      );
    },
    [boxes]
  );
  const [, drop] = useDrop({
    accept: 'box',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      [left, top] = doSnapToGrid(left, top);
      moveBox(item.id, left, top);
      return undefined;
    }
  });
  return (
    <PileWrapper ref={drop}>
      {Object.keys(boxes).map(key => renderBox(boxes[key], key))}
    </PileWrapper>
  );
};
export default Pile;
