import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  border: none;
  padding: 1.4rem 2rem;
  min-width: 17.1rem;
  font-weight: 700;
  border-radius: 2.8rem;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.8rem;
  text-decoration: none;
  box-shadow: 0px 25px 25px -10px rgba(63, 91, 194, 0.247159);

  background: ${({ theme }) => theme.colors.activeBlue};
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.2s;

  ${({ fluid }) => fluid && `
    width: 100%;
  `}

  ${({ mode, theme }) => !mode && `
    &:hover {
      background: ${theme.colors.lightBlue};
      color: ${theme.colors.light};
    }
  `}


  ${({ mode, theme }) => mode === 'white' && `
    background: ${theme.colors.light};
    color: ${theme.colors.activeBlue};
    box-shadow: none;
    &:hover {
      color: ${theme.colors.lightBlue};
    }
  `}

  ${({ mode, theme }) => mode === 'light' && `
    background: ${theme.colors.purpleLight};
    color: ${theme.colors.activeBlue};
    box-shadow: none;
    &:hover {
      background: ${theme.colors.hoverPurple};
    }
  `}
`;
