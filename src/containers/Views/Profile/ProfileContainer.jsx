import React from 'react';
import UserActions from "../../../actions/UserActions";
import { connect } from "react-redux";

class Profile extends React.Component {

	render() {

		return (

			<h1>Profile </h1>
		);
	}

}

export default connect(
	state => ({}),
	dispatch => ({}),
)(Profile);
