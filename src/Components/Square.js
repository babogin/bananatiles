import React from 'react'
import styled from 'styled-components';

const Square = (props) => {
  const { letter } = props

  return (
    <SquareWrapper>{letter}</SquareWrapper>
  )
}

export default Square;

const SquareWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: lightgray;
`

