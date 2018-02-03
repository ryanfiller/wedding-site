import React from 'react'
import Link from 'gatsby-link'

import Image from '../components/image.js'
import Header from '../components/header.js'

import styled from 'styled-components';
import styles from '../config/styles.js';

const Invite = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  font-size: 1.75rem;

  p {
    font-family: ${styles.sansSerif}
  }
`;

const IndexPage = () => (
  <Invite>
  
    <Image />
  
    <Header />

    <Body>
      <p>
        Check back as we finalize more details.
      </p>
    </Body>

  </Invite>
)

export default IndexPage
