import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    font-size: 12px;
  }
`;

module.exports = {
  
  smallBreak: '40rem',

  bigBreak: '50rem',

  black: '#2a2b2d',

  serif: '"Rokkitt", serif',
  
  sansSerif: '"Lato", sans-serif'

};