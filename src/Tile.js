import React, { Component } from 'react';
import styled from 'styled-components';

const TileWrapper = styled.div`
    padding: 15px;
    border: 1px solid black;
    background-color: #bbb}

`

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        const { letter } = this.props

        return (
            <React.Fragment>
                <TileWrapper>
                    {letter}
                </TileWrapper>
            </React.Fragment>

        );
    }
}

export default Tile;
