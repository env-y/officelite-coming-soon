import * as React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import Input from './input';

import { Button } from '../style/button';
import { WrapSelect } from '../style/select';
import CHECK_ICON from '../images/sign-up/icon-check.svg';

const optionsPack = [
  {
    value: 'Basic Pack',
    price: 'Free',
  },
  {
    value: 'Pro Pack',
    price: '$9.99',
  },
  {
    value: 'Ultimate Pack',
    price: '$19.99',
  }
]

const FormBlock = styled.div`
  padding: 4rem 4.2rem 5rem;
  background: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.247159);
  border-radius: 1.3rem;
`;

const Row = styled.div`
  margin-bottom: 2.4rem;
  ${({ max }) => max && `
    margin-bottom: 4rem;
  `}
`;

const PlanLine = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.8rem;
  span {
    opacity: 0.4;
  }
  ${({ isSelected }) => isSelected && `
    &::after {
      content: '';
      position: absolute;
      right: 0.3rem;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      height: 1.4rem;
      width: 1.4rem;
      background: url(${CHECK_ICON});
      background-repeat: no-repeat;
      background-position: center;
    }
  `}

`;

const Option = styled.div`
  cursor: pointer;
  padding: 1.6rem 0 1.5rem;
  &:not(:last-child) {
    border-bottom: 0.1rem solid #747b9540;
  }
`;

const CustomOptionComponent = ({ innerProps, innerRef, data, isSelected }) => (
  <Option>
    <PlanLine ref={innerRef} {...innerProps} isSelected={isSelected}>
      {data.value} <span>{data.price}</span>
    </PlanLine>
  </Option>
);

const ValueComponent = ({ children, data, ...props }) => (
  <PlanLine>{data.value} <span>{data.price}</span></PlanLine>
);


export default () => {
  const [plan, setPlan] = React.useState({
    value: 'Basic Pack',
    price: 'Free',
  });

  const handleChange = (event) => {
    setPlan(event);
  };
  return (
    <FormBlock>
      <Row>
        <Input
          placeholder="Name"
        />
      </Row>
      <Row>
        <Input
          placeholder="Email Address"
        />
      </Row>
      <Row>
        <WrapSelect>
          <Select
            value={plan}
            onChange={handleChange}
            isSearchable={false}
            options={optionsPack}
            components={{ Option: CustomOptionComponent, SingleValue: ValueComponent }}
            classNamePrefix="react-select"
          />
        </WrapSelect>
      </Row>
      <Row>
        <Input
          placeholder="Phone Number"
        />
      </Row>
      <Row max>
        <Input
          placeholder="Company"
        />
      </Row>
      <Button fluid>Get on the list</Button>
    </FormBlock>
  )
}