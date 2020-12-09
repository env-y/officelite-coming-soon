import { css } from 'styled-components';
import theme from './theme';

export const media = (Object.keys(theme.size)).reduce(
  (acc, key) => {
    acc[key] = (...style) => {
      // @ts-ignore
      return css`@media (min-width: ${theme.size[key] / 16}em) { ${css(...style)} }`;
    };
    return acc;
  },
  {}
);
