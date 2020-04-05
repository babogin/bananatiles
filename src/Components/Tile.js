import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Tile = (props) => {

  return (
    <TileWrapper>
        {props.title}
    </TileWrapper>
    );
}

export default Tile;


const TileWrapper = styled.div`
    padding: 15px;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    background-color: #bbb;
    cursor: move;
`
