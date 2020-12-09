import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import { media } from './utils';
import PATTERN_FOTTER from '../images/home/bg-pattern-footer.svg';
import PATTERN_HEADER from '../images/home/bg-pattern-header.svg';

export const Container = styled.div`
  max-width: calc(111rem + 2.3rem*2);
  margin: 0 auto;
  padding: 4.6rem 2.3rem 9rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  ${({ margin }) => margin && `
    margin: ${margin};
  `}
`;

export const MainBlock = styled.div`
  margin-bottom: 18.4rem;
`;

export const MainBlockGrid = styled(Grid)`
  flex-direction: column-reverse;
  justify-content: center;
  text-align: center;
  ${media.sm`
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
  `}
`;

export const SignUpGrid = styled(Grid)`
  text-align: center;
  justify-content: center;
  ${media.lg`
    text-align: left;
    justify-content: space-between;
  `}
`;

export const WrapPlans = styled.div`
  margin-bottom: 8.3rem;
`;

export const WrapHome = styled.div`
    ${({ theme: { colors } }) => `
      background-image:
        url(${PATTERN_FOTTER}),
        url(${PATTERN_HEADER}),
        linear-gradient(
          to bottom, 
          ${colors.bg} 0%, 
          ${colors.bg} 67%, 
          ${colors.dark} 67%, 
          ${colors.dark} 100%
        );
    `}
    background-position: 157% -222%, top -62% right -38%;
    background-repeat: no-repeat;
`;

export const WrapSignUp = styled.div`
  min-height: 100vh;
    ${({ theme: { colors } }) => `
      background-image:
        url(${PATTERN_FOTTER}),
        linear-gradient(
          to bottom, 
          ${colors.bg} 0%, 
          ${colors.bg} 62%, 
          ${colors.dark} 62%, 
          ${colors.dark} 100%
        );
    `}
    background-position: 52% 130%;
    background-repeat: no-repeat;
    background-size: contain;
    ${media.lg`
      ${({ theme: { colors } }) => `
        background-image:
          url(${PATTERN_FOTTER}),
          linear-gradient(
            to right, 
            ${colors.bg} 0%, 
            ${colors.bg} 62%, 
            ${colors.dark} 62%, 
            ${colors.dark} 100%
          );
          background-position: -47% 81%;
      `}
    `}

`;

export const Row = styled.div`
  margin-bottom: 2.4rem;
  ${({ max }) => max && `
    margin-bottom: 4rem;
  `}
`;
