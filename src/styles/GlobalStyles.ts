'use client';

import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --black: #1B1B1B;
    --nomad-black: #112211;
    
    --gray-900: #4B4B4B;
    --gray-800: #79747E;
    --gray-700: #A1A1A1;
    --gray-600: #A4A1AA;
    --gray-500: #ADAEB8;
    --gray-400: #CBC9CF;
    --gray-300: #DDDDDD;
    --gray-200: #EEEEEE;
    --gray-100: #FAFAFA;

    --green-200: #0B3B2D;
    --green-100: #CED8D5;

    --red-300: #FF472E;
    --red-200: #FFC2BA;
    --red-100: #FFE4E0;
    
    --light-green: #00AC07;

    --orange-200: #FF7C1D;
    --orange-100: #FFF4E8;

    --yellow: #FFC23D;

    --blue-300: #E5F3FF;
    --blue-200: #2EB4FF;
    --blue-100: #0085FF;    
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
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
    color: var(--black);
    word-break: keep-all;
    font-family: "Pretendard", sans-serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
