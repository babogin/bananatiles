import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tile from './Tile.js'

const Pile = (props) => {

    const startingTileCount = 15
    const letters = ['J', 'J', 'K', 'K', 'Q', 'Q', 'X', 'X', 'Z', 'Z', 'B', 'B', 'B', 'C', 'C', 'C', 'F', 'F', 'F', 'H', 'H', 'H', 'M', 'M', 'M', 'P', 'P', 'P', 'V', 'V', 'V', 'W', 'W', 'W', 'Y', 'Y', 'Y', 'G', 'G', 'G', 'G', 'L', 'L', 'L', 'L', 'L', 'D', 'D', 'D', 'D', 'D', 'D', 'S', 'S', 'S', 'S', 'S', 'S', 'U', 'U', 'U', 'U', 'U', 'U', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'];

    const [lettersPile,setLettersPile] = useState(null)

    useEffect(() => {
        generatePile()
    },[])

    const generatePile = () => {
        //need to move to server side if all players pull from same pile
        let lettersCopy = [...letters]
        const lettersPileTemp = []

        for (let i = 0; i < startingTileCount; i++) {
            const randIndex = Math.floor(Math.random() * (letters.length - i))
            const letter = lettersCopy[randIndex]
            lettersPileTemp.push(letter)
            lettersCopy.splice(randIndex,1)
        }
        setLettersPile(lettersPileTemp)
    }

    return (
        <PileWrapper>
            {
                lettersPile && lettersPile.map(letter => (
                    <Tile letter={letter}></Tile>
                ))
            }
        </PileWrapper>
    )
}

export default Pile;

const PileWrapper = styled.div`
    height: 33vh;
    border: 1px solid black;
    display:flex;
    flex-wrap:wrap;
`
