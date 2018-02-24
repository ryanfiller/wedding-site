import React from 'react'
import styled from 'styled-components';
import styles from '../config/styles.js';

const H1 = styled.h1`  
  display: block;
  text-align: center;
  font-family: ${styles.serif};
  font-size: 2rem;
  text-transform: lowercase;
  color: ${styles.black};
  font-weight: 200;

  padding: 1rem 0;
  margin: 0;
`;

const Names = styled.span`
  display: block;
  font-size: 2.25em;
  letter-spacing: .125em;
  margin-top: -2em;

  @media (max-width: ${styles.smallBreak}) {
    display: block;
    margin-top: 0;
  }
`;

const Ampersand = styled.span`
  font-family: ${styles.sansSerif};
  font-weight: 100;
  font-size: 2.5em;
  padding: 0;
  margin: 0 -.25em -.25em -.25em;
  position: relative;
  top: .25em;

  @media (max-width: ${styles.smallBreak}) {
    font-weight: 300;
    display: block;
    font-size: .8em;
    margin-top: -0.35em;
    position: initial;
  }
`;

const Verbs = styled.span`
  display: block;
  letter-spacing: .125em;
  margin-top: .5em;

  @media (max-width: ${styles.smallBreak}) {
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