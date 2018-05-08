import React from 'react';
import { Switch,Route } from "react-router-dom";
import Home from "./Containers/Views/Home";
import SignUp from "./Containers/Views/SignUp";
import SignIn from "./Containers/Views/SignIn";
import Actors from "./Containers/Views/Actors";
import Profile from "./Containers/Views/Profile";
import Layout from "./Containers/Layouts/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Routes extends React.Component {
	render() {
		return (
			<Layout>
				<ToastContainer />
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/actors" component={Actors}/>
					<Route exact path="/profile" component={Profile}/>
					<Route exact path="/sign-up" component={SignUp}/>
					<Route exact path="/sign-in" component={SignIn}/>
				</Switch>
			</Layout>
		);
	}
}
