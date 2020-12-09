import * as React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

import { Button } from '../style/button';
import PRICE_PATTERN from '../images/home/bg-pattern-pricing.svg';

const CardPlan = styled.div`
  box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.247159);
  border-radius: 1.3rem;
  padding: 4rem;
  text-align: center;
  background-color: ${({ blue, theme }) => blue ? theme.colors.activeBlue : theme.colors.light};
  ${({ blue, theme }) => blue && `
    color: ${theme.colors.light};
    background-image: url(${PRICE_PATTERN});
    background-position: bottom -20% center;
    background-repeat: no-repeat;
    ${Feture} {
      color: ${theme.colors.light};
      opacity: 0.75;
    }
  `}
`;

const SubPrice = styled.p`
  margin-bottom: 5.6rem;
  color: ${({ theme }) => theme.colors.lighterText};
  ${({ blue, theme }) => blue && `
    color: ${theme.colors.light};
  `}
`

const NamePlan = styled.h3`
  font-weight: bold;
  font-size: 2rem;
`;

const Price = styled.div`
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 6.4rem;
  margin: 4rem 0 0.8rem;
`;

const FeturesBlock = styled.div`
  margin-bottom: 3.2rem;
`;

const Feture = styled.p`
  margin-bottom: 1.6rem;
`;

export default ({ name, price, subPrice, fetures, blue }) => (
  <CardPlan blue={blue}>
    <NamePlan>{name}</NamePlan>
    <Price>{price}</Price>
    <SubPrice blue={blue}>{subPrice}</SubPrice>

    <FeturesBlock>
      {fetures.map((f, i) => (
        <Feture key={i}>{f}</Feture>
      ))}
    </FeturesBlock>

    <Button as={Link} to="/sign-up" mode={blue ? 'white' : 'light'}>
      Try for Free
    </Button>
  </CardPlan>
);
