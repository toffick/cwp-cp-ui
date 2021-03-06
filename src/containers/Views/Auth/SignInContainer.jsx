import React from 'react';
import Input from '../../../components/Input';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { validateEmail } from '../../../helpers/auth';
import UserActions from "../../../actions/UserActions";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const validateParams = { needToSetState: true };
		if (this.email.validate(validateParams) || this.password.validate(validateParams)) {
			return;
		}

		const email = this.email.value;
		const password = this.password.value;

		this.props.signIn(email, password);
	}

	render() {
		if (this.props.isAuth) {
			return <Redirect to="/"/>;
		}

		return (
			<div className="auth-page">
				<div className="auth-wrap">
					<form onSubmit={this.handleSubmit}>
						<h3 className="auth-wrap-head">Sign in</h3>
						<p className="auth-wrap-lead">Please enter your Email and password.</p>

						<div className="clearfix">
							<Input
								label="Email"
								ref={(node) => {
									this.email = node;
								}}
								validation={validateEmail}
							/>
							<Input
								label="Password"
								type="password"
								ref={(node) => {
									this.password = node;
								}}
								validation={() => {
								}}
							/>
						</div>
						<button type="submit" className="auth-btn-submit"><span>Sign In</span></button>
					</form>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		isAuth: state.user.get('isAuth'),
		wrongCredentials: state.user.get('wrongCredentials')
	}),
	dispatch => ({
		signIn: (email, password) => dispatch(UserActions.signIn(email, password)),
	}),
)(SignIn);
