import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ActorsList from './containers/Views/Actors/Actors';
import MoviesList from './containers/Views/Movies/Movies';
import SignUpContainer from './containers/Views/Auth/SignUpContainer';
import SignInContainer from './containers/Views/Auth/SignInContainer';
import ProfileContainer from './containers/Views/Profile/ProfileContainer';
import RandomMovieContainer from './containers/Views/RandomMovie/RandomMovieContainer';
import Layout from './containers/Layouts/Layout';
import ActorContainer from './containers/Views/Actor/Actor';
import NoMatch from './containers/Views/NoMatch';
import Home from './containers/Views/Home';
import Movie from './containers/Views/Movie/Movie';

import 'react-toastify/dist/ReactToastify.css';

export default class Routes extends React.Component {
	render() {
		return (
				<Layout>
					<ToastContainer/>
					<Switch>
						<Route exact path="/movies/:id" component={Movie}/>
						<Route exact path="/movies" component={MoviesList}/>
                        <Route exact path="/actors/:id" component={ActorContainer}/>
                        <Route exact path="/actors" component={ActorsList}/>
						<Route exact path="/profile/:id" component={ProfileContainer}/>
                        <Route exact path="/random-movie" component={RandomMovieContainer}/>
                        <Route exact path="/sign-up" component={SignUpContainer}/>
						<Route exact path="/sign-in" component={SignInContainer}/>
						<Route exact path="/" component={Home}/>
						<Route component={NoMatch}/>
					</Switch>
				</Layout>
		);
	}
}
