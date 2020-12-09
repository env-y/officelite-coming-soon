
import { createGlobalStyle } from "styled-components"
import { normalize } from 'polished';

import { media } from './utils';

export default createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.colors.bg};
  }
  * {
    box-sizing: border-box;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 2.4rem;
    font-size: 40px;
    line-height: 48px;

    ${media.lg`
      font-size: 5.6rem;
      line-height: 6.4rem;
    `}
  }

  p {
    font-size: 1.6rem;
    line-height: 2.8rem;
    ${media.lg`
      line-height: 2.8rem;
    `}
  }

  body {
    color: ${({ theme }) => theme.colors.mainText};
    font-family: Kumbh Sans, Arial, sans-serif;
  }
  @font-face {
    font-family: "Kumbh Sans";
    src: url(${require('../fonts/KumbhSans-Regular.ttf')}) format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Kumbh Sans";
    src: url(${require('../fonts/KumbhSans-Light.ttf')}) format("truetype");
    font-weight: 300;
  }
  @font-face {
    font-family: "Kumbh Sans";
    src: url(${require('../fonts/KumbhSans-Bold.ttf')}) format("truetype");
    font-weight: 700;
  }
`