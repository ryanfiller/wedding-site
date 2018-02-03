import React from 'react'
import styled from 'styled-components';
import styles from '../config/styles.js';

const H1 = styled.h1`  
  display: block;
  text-align: center;
  font-family: ${styles.serif};
  font-size: 2rem;
  text-transform: uppercase;

  padding: 1rem 0;
  margin: 0;
  border-bottom: .25rem dashed black;
`;

const Names = styled.span`
  display: block;
  font-size: 2em;
  font-weight: 300;

  @media (max-width: ${styles.break}) {
    display: block;
  }
`;

const Ampersand = styled.span`
  font-family: ${styles.sansSerif};
  font-size: 1.5em;
  font-weight: 300;
  padding: 0 .25em;
  margin-bottom: -.25em;
  position: relative;
  top: .125em;

  @media (max-width: ${styles.break}) {
    display: block;
    font-size: .8em;
    margin-top: -0.35em;
    position: initial;
  }
`;

const Verbs = styled.span`
  letter-spacing: .125em;

  @media (max-width: ${styles.break}) {
    display: block;
    max-width: 30rem;
  }
`;

const Header = () => (
  <H1>
      <Names>
        Gabby
          <Ampersand> & </Ampersand>
        Ryan
      </Names>
      <Verbs> Are Getting Married! </Verbs>
    </H1>
)

export default Header