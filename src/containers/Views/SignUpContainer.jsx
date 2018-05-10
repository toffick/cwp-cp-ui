import React from 'react';
import Input from '../../components/Input';
import { validateEmail, validatePassword } from '../../helpers/auth';
import UserActions from "../../actions/UserActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUp extends React.Component {

	constructor(props) {
		super(props);

		this.state = { isRegistered: false };
	}

	handleSubmit(e) {
		e.preventDefault();
		const validateParams = { needToSetState: true };
		if (this.email.validate(validateParams)
			|| this.password.validate(validateParams)
			|| this.confirmPassword.validate(validateParams)
		) {
			return;
		}

		const email = this.email.value;
		const password = this.password.value;

		this.props.signUp(email, password);
		this.setState({ isRegistered: true });
	}

	render() {
		if (this.state.isRegistered) {
			return <Redirect to="/"/>;
		}

		return (
			<div className="auth-page">
				<form className="auth-wrap" onSubmit={e => this.handleSubmit(e)}>
					<h3 className="auth-wrap-head">Sign up</h3>
					<p className="auth-wrap-lead">Please fill out the form bellow.</p>

					<div className="clearfix">
						<Input
							label="Email"
							requiered
							ref={(node) => {
								this.email = node;
							}}
							validation={validateEmail}
						/>
						<Input
							label="Password"
							type="password"
							requiered
							ref={(node) => {
								this.password = node;
							}}
							validation={validatePassword}
						/>
						<Input
							label="Confirm password"
							type="password"
							requiered
							ref={(node) => {
								this.confirmPassword = node;
							}}
							validation={(value) => {
								if (this.password === undefined) return ' ';
								const password = this.password.value;
								if (!password) return 'Empty password';
								if (value !== password) {
									return 'Passwords are different';
								}
								return null;
							}}
						/>
						<button type="submit" className="auth-btn-submit"><span>Next</span></button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(
	state => ({
		isAuth: state.user.get('isAuth'),
	}),
	dispatch => ({
		signUp: (email, password) => dispatch(UserActions.signUp(email, password)),
	}),
)(SignUp);
