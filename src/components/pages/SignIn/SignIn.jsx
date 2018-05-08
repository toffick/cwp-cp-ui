import React from 'react';
import Input from '../../elements/Input';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { validateName, validatePassword, validatePostingPrivateKey } from '../../../helpers/auth';
import UserActions from "../../../actions/UserActions";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount(){
		this.props.wrongCredentialsDisable(false);
	}

	handleSubmit(e) {
		e.preventDefault();
		const validateParams = { needToSetState: true };
		if (this.name.validate(validateParams)
			|| this.password.validate(validateParams)
		) {
			e.preventDefault();
			return;
		}

		const name = this.name.value;
		const password = this.password.value;

		this.props.signIn(name, password);
	}

	render() {
		if (this.props.isAuth) {
			return <Redirect to="/"/>;
		}
		console.log(this.props.wrongCredentials, 'sd');
		return (
			<div className="auth-page">
				<form onSubmit={this.handleSubmit}>
					<h3 className="auth-wrap-head">Sign in</h3>
					<p className="auth-wrap-lead">Please enter your Email and password.</p>

					<div className="clearfix">
						{this.props.wrongCredentials ?
							<div className="error_message">Invalid login or password</div>
							:
							null
						}
						<Input
							label="Email"
							ref={(node) => {
								this.name = node;
							}}
							validation={() => {
							}}
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
		wrongCredentialsDisable: () => dispatch(UserActions.wrongCredentialsDisable())
	}),
)(SignIn);
