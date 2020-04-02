import React from 'react'
import styled from 'styled-components';

const SquareWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: lightgray;
`

export default function Square(props) {
  return <SquareWrapper>{props.letter}</SquareWrapper>
}