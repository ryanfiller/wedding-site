import React from 'react'
import styled from 'styled-components';
import styles from '../config/styles.js';

const Container = styled.div`  
  width: 100%;
  display: block;
  max-width: 40rem;
  margin: 0 auto;
  position: relative;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Hover = styled.img`
  display: block;
  width: 100%;
  position: absolute;
  opacity: 0;
  transition: .125s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${styles.break}) {
    opacity: 1;
  }
`;

const Image = () => (
  <Container>
      <Hover src="../images/gabbyandryan-hover.png" />
      <Img src="../images/gabbyandryan.png" />
    </Container>
)

export default Image