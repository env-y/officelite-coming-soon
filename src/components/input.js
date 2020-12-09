import * as React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 0 1.6rem 1.2rem;
  border: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.line};
  font-size: 1.6rem;
  line-height: 2.8rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.5;
  }
`;

export default ({ ...props }) => (
  <>
    <Input {...props}  />
  </>
)