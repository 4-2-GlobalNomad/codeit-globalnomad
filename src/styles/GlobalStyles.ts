'use client';

import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --black: #1B1B1B;
    --nomad-black: #112211;
    
    --gray-4B4B4B: #4B4B4B;
    --gray-79747E: #79747E;
    --gray-A1A1A1: #A1A1A1;
    --gray-A4A1AA: #A4A1AA;
    --gray-ADAEB8: #ADAEB8;
    --gray-CBC9CF: #CBC9CF;
    --gray-DDDDDD: #DDDDDD;
    --gray-EEEEEE: #EEEEEE;
    --gray-FAFAFA: #FAFAFA;

    --green-0B3B2D: #0B3B2D;
    --green-CED8D5: #CED8D5;

    --red-FF472E: #FF472E;
    --red-FFC2BA: #FFC2BA;
    --red-FFE4E0: #FFE4E0;
    
    --green-00AC07: #00AC07;

    --orange-FF7C1D: #FF7C1D;
    --orange-fff4E8: #FFF4E8;

    --yellow-FFC23D: #FFC23D;

    --blue-E5F3FF: #E5F3FF;
    --blue-2EB4FF: #2EB4FF;
    --blue-0085FF: #0085FF;    
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
  }

  img, svg {
    vertical-align: bottom;
  }

  body {
    color: var(--black-1B1B1B);
    word-break: keep-all;
    font-family: "Pretendard", sans-serif;
  }
`;

export default GlobalStyle;
