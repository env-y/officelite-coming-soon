import * as React from 'react';
import styled from 'styled-components';

import { media } from '../style/utils';

const Title = styled.p`
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light};
  span {
    color: ${({ theme }) => theme.colors.activeBlue};
  }

  ${({ lightTheme, theme }) => lightTheme && `
    color: ${theme.colors.mainText};
  `}
`;

const Time = styled.div`
  display: inline-block;
  width: 7rem;
  padding: 1.1rem 1.6rem 1.0rem;
  text-align: center;
  border-radius: 1.3rem;
  &:not(:last-child) {
    margin-right: 1.6rem;
  }
  background: ${({ theme }) => theme.colors.lighterText};
  ${({ lightTheme, theme }) => lightTheme && `
    background: ${theme.colors.lightCard};
  `}
  ${media.sm`
    width: 10rem;
    padding: 2rem 1.6rem 1.6rem;
  `}
`

const Value = styled.p`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4.8rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.light};
  ${({ lightTheme, theme }) => lightTheme && `
    color: ${theme.colors.activeBlue};
  `}

  ${media.sm`
    font-size: 5.6rem;
    line-height: 6.4rem;
  `}

`;

const Label = styled.p`
  margin: 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.5;
  ${({ lightTheme, theme }) => lightTheme && `
    color: ${theme.colors.mainText};
  `}
`;

const TimeBlock = ({ label, value, lightTheme }) => (
  <Time lightTheme={lightTheme}>
    <Value lightTheme={lightTheme}>
      {value}
    </Value>
    <Label lightTheme={lightTheme}>
      {label}
    </Label>
  </Time>
);

const calculateTimeLeft = () => {
  const difference = +new Date(`2021/1/10`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default ({ lightTheme }) => {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
      const interval = setInterval(() => {
          const currentTimeLeft = calculateTimeLeft();

          if (!Object.keys(currentTimeLeft).length) {
              clearInterval(interval)
          }
          setTimeLeft(currentTimeLeft);
      }, 1000);

      return () => {
          clearInterval(interval)
      }
  }, []);
  return (
    <div>
      <Title lightTheme={lightTheme}>Coming <span>10 Jun 2021</span></Title>
      <div>
        <TimeBlock
          lightTheme={lightTheme}
          label="days"
          value={timeLeft.days}
        />
        <TimeBlock
          lightTheme={lightTheme}
          label="hours"
          value={timeLeft.hours}
        />
        <TimeBlock
          lightTheme={lightTheme}
          label="min"
          value={timeLeft.minutes}
        />
        <TimeBlock
          lightTheme={lightTheme}
          label="sec"
          value={timeLeft.seconds}
        />
      </div>
    </div>
  );
}