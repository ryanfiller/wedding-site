import React, {Component} from 'react'
import styled from 'styled-components';

import styles from '../config/styles.js';

const GoogleMap = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;
 
export class Map extends Component {
render() {
    return (
      <GoogleMap className="map" src={this.props.url} allowfullscreen />
    );
  }
}
 
export default Map