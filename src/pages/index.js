import * as React from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';

import Header from '../components/header';
import CardPlan from '../components/cardPlan';
import Timer from '../components/timer';

import { Container, Text, MainBlock, MainBlockGrid, WrapPlans, WrapHome, SignUpGrid } from '../style/fragments';
import { Button } from '../style/button';

import CHART_IMG from '../images/home/illustration-charts.svg';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    subPrice: 'Up to 5 users for free',
    fetures: ['Basic document collaboration', '2 GB storage', 'Great security and support'],
  },
  {
    name: 'Pro',
    price: '$9.99',
    subPrice: 'Per user, billed monthly',
    fetures: ['All essential integrations', '50 gb storage', 'More control and insights'],
    blue: true,
  },
  {
    name: 'Ultimate',
    price: '$19.99',
    subPrice: 'Per user, billed monthly',
    fetures: ['Robust work management', '100 gb storage', 'VIP support'],
  }

]

const IndexPage = () => {
  return (
    <WrapHome>
      <Container>
        <Header />
        <section>
          <MainBlock>
            <MainBlockGrid container spacing={5} alignItems="center">
              <Grid item xs={12} sm={6}>
                <h1>
                  A simple solution to complex tasks is coming soon
                </h1>
                <Text margin="0 0 3.2rem">
                Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new 
    collaboration platform built with an intuitive interface to improve productivity.
                </Text>
                <Button as={Link} to="/sign-up">
                  Get Started
                </Button>
              </Grid>
              <Grid item xs={7} sm={6}>
                <img style={{ width: '100%' }} src={CHART_IMG} alt="charts" />
              </Grid>
            </MainBlockGrid>
          </MainBlock>
        </section>

        <section>
          <WrapPlans>
            <Grid container spacing={3} justify="center">
              {plans.map(plan => (
                <Grid key={plan.name} item xs={12} sm={6} md={4}>
                  <CardPlan
                    {...plan}
                  />
                </Grid>
              ))}
            </Grid>
          </WrapPlans>
        </section>

        <section>
          <SignUpGrid container spacing={4} alignItems="center">
            <Grid item>
              <Timer />
            </Grid>

            <Grid item>
              <Button as={Link} to="/sign-up">Get Started</Button>
            </Grid>
          </SignUpGrid>
        </section>
      </Container>
    </WrapHome>
  )
}

export default IndexPage
