import React, { Component } from 'react'
import styled from 'styled-components';
import styles from '../config/styles.js';

import Map from '../components/map.js'

const Container = styled.div`
    padding: 2rem;
    display: flex;

    .info {
        flex: 1;
        align-items: stretch;
    }

    .map {
        flex: 1;
    }

    &:nth-child(even) {
        flex-direction: row-reverse;
    }

    @media (max-width: ${styles.break}) {
        display: block;

        .map {
            height: calc(100vw - 4rem);
        }
    }
`;

const Info = styled.div`
    color: red;
`;

export class Location extends Component {
    render() {
        return (
            <Container>
                <Info className="info">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.address}</p>
                </Info>
                <Map url={this.props.url} /> 
            </Container>
        );
      }
    }
  
  export default Location