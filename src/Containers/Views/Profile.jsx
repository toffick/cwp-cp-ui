import React from 'react';
import UserActions from "../../actions/UserActions";
import { connect } from "react-redux";

class Profile extends React.Component {

	render() {

		return (

			<h1>Profile <button onClick={this.props.ko}/>
			</h1>
		);
	}

}

export default connect(
	state => ({
		isAuth: state.user.get('isAuth')
	}),
	dispatch => ({
		ko: (email, password) => dispatch(UserActions.logout(email, password))
	}),
)(Profile);
