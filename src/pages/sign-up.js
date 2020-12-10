import * as React from "react"
import Grid from '@material-ui/core/Grid';

import Header from '../components/header';
import Timer from '../components/timer';
import SignUpForm from '../components/signUpForm';

import { Container, WrapSignUp, SignUpGrid, Text } from '../style/fragments';

export default () => (
	<WrapSignUp>
		<Container>
			<Header />
			<section>
				<SignUpGrid container alignItems="center" spacing={4}>
					<Grid item xs={12} sm={10} md={6}>
						<h1>Work smarter. Save time.</h1>
						<Text margin="0 0 3.2rem">
						Easily manage your projects. Get on the list and receive in-app perks available only to 
early subscribers. We are moving into final development and getting ready for official launch soon.
						</Text>
						<Timer lightTheme />
					</Grid>

					<Grid item xs={12} sm={8} md={5}>
						<SignUpForm />
					</Grid>
				</SignUpGrid>
			</section>
		</Container>
	</WrapSignUp>
);
