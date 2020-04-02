import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tile from './Tile.js'

const PileWrapper = styled.div`
    height: 33vh;
    border: 1px solid black;
`


export default function Pile(props) {

  return (
    <React.Fragment>
        <PileWrapper>
            <Tile letter="A"></Tile>
        </PileWrapper>
    </React.Fragment>
);
}
