import React from 'react';
import { Switch, Route } from "react-router-dom";
import MoviesListContainer from "./containers/Views/MoviesListContainer";
import SignUpContainer from "./containers/Views/SignUpContainer";
import SignInContainer from "./containers/Views/SignInContainer";
import ActorsListContainer from "./containers/Views/ActorsListContainer";
import ProfileContainer from "./containers/Views/ProfileContainer";
import Layout from "./containers/Layouts/Layout";
import { ToastContainer } from 'react-toastify';
import ActorContainer from "./containers/Views/ActorContainer";
import MovieContainer from "./containers/Views/MovieContainer";
import 'react-toastify/dist/ReactToastify.css';
import { MuiThemeProvider } from "material-ui";

export default class Routes extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<Layout>
					<ToastContainer/>
					<Switch>
						<Route exact path="/" component={MoviesListContainer}/>
						<Route exact path="/movies/:id" component={MovieContainer}/>
						<Route exact path="/actors" component={ActorsListContainer}>
							<Route exact path="/:id" component={ActorContainer}/>
						</Route>
						<Route exact path="/profile" component={ProfileContainer}/>
						<Route exact path="/users/:id" component={ProfileContainer}/>
						<Route exact path="/sign-up" component={SignUpContainer}/>
						<Route exact path="/sign-in" component={SignInContainer}/>
					</Switch>
				</Layout>
			</MuiThemeProvider>
		);
	}
}
