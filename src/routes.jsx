import React from 'react';
import { Switch, Route } from "react-router-dom";
import MoviesList from "./containers/Views/Movies/MoviesList";
import SignUpContainer from "./containers/Views/Auth/SignUpContainer";
import SignInContainer from "./containers/Views/Auth/SignInContainer";
import ActorsListContainer from "./containers/Views/Actors/ActorList";
import ProfileContainer from "./containers/Views/Profile/ProfileContainer";
import Layout from "./containers/Layouts/Layout";
import { ToastContainer } from 'react-toastify';
import ActorContainer from "./containers/Views/Actors/ActorItem";
import 'react-toastify/dist/ReactToastify.css';
import { MuiThemeProvider } from "material-ui";
import NoMatch from "./containers/Views/NoMatch";
import Home from "./containers/Views/Home";
import Movie from "./containers/Views/Movie/Movie";

export default class Routes extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<Layout>
					<ToastContainer/>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/movies/:id" component={Movie}/>
						<Route exact path="/movies" component={MoviesList}/>
						<Route exact path="/actors/:id" component={ActorContainer}/>
						<Route exact path="/actors" component={ActorsListContainer}/>
						<Route exact path="/users/:id/profile" component={ProfileContainer}/>
						<Route exact path="/sign-up" component={SignUpContainer}/>
						<Route exact path="/sign-in" component={SignInContainer}/>
						<Route component={NoMatch}/>
					</Switch>
				</Layout>
			</MuiThemeProvider>
		);
	}
}
