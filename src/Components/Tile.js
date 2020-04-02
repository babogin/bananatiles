import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TileWrapper = styled.div`
    padding: 15px;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    background-color: #bbb;
`


export default function Tile(props) {

  return (
    <React.Fragment>
        <TileWrapper>
            {props.letter}
        </TileWrapper>
    </React.Fragment>
);
}
