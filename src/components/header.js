import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { media } from '../style/utils';

import LOGO from '../images/logo.svg';

const Header = styled.div`
  margin-bottom: 8rem;
  text-align: center;
  ${media.sm`
    margin-bottom: 10rem;
    text-align: left;
  `}
`;

export default () => (
  <Header>
    <header>
      <Link to="/">
        <img src={LOGO} alt="logo" />
      </Link>
    </header>
  </Header>
)
