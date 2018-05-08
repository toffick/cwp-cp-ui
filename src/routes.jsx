import React from 'react';
import { Switch,Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SignUp from "./components/pages/SignUp/SignUp";
import SignIn from "./components/pages/SignIn/SignIn";
import Actors from "./components/pages/Actors/Actors";
import Profile from "./components/pages/Profile/Profile";
import Layout from "./components/layout/Layout";
import { ToastContainer, toast } from 'react-toastify';
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
