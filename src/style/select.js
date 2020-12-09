import styled from 'styled-components';

import ICON_ARROW from '../images/sign-up/icon-arrow-down.svg';

export const WrapSelect = styled.div`
  .react-select__control {
    cursor: pointer;
    padding: 0 1.6rem 1.2rem;
    border: none;
    border-radius: 0;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.line};
    font-size: 1.6rem;
    line-height: 2.8rem;
    box-shadow: none;
    &:hover {
      border: none;
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.line};
    }
  }

  .react-select__value-container {
    padding: 0;
  }
  .react-select__placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.5;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    svg {
      display: none;
    }
    background-image: url(${ICON_ARROW});
    background-repeat: no-repeat;
    background-position: center;
  }
  .react-select__control--menu-is-open .react-select__indicator {
    transform: rotate(180deg);
  }

  .react-select__menu {
    padding: 1.6rem 3.2rem;
    box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.747077);
    border: 0.1rem solid rgba(51, 57, 80, 0.153273);
    border-radius: 0.8rem;
  }
  .react-select__menu-list {
    padding: 0;
    max-height: max-content;
  }
`;