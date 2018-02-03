import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import styled from 'styled-components';
import styles from '../config/styles.js';

const Site = styled.div`  
  background :white;
  margin: 0;
  padding: 0;
  font-size: 18px;
  background-image: url(/images/speckle-tone.jpg);
  background-size: 5rem;
  background-position: center top;

  * {
    box-sizing: border-box;
  }
`;

const TemplateWrapper = ({ children }) => (
  <Site>
    <link href="https://fonts.googleapis.com/css?family=Arvo:400,700" rel="stylesheet"/ >
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
    <Helmet
      title="Gabby & Ryan Are Getting Married"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="site">
      {children()}
    </div>
  </Site>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
