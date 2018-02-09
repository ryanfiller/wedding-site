import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    font-size: 12px;
  }
`;

module.exports = {
  
  break: '40rem',

  serif: '"Arvo", serif',
  
  sansSerif: '"Lato", sans-serif'

};