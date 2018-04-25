import React from 'react';
import Input from '../../elements/Input';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
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
			return <Redirect to="/chat" />;
		}
		{
			return (
				<div className="auth-page">
					<div className="auth-wrap">
						<form onSubmit={this.handleSubmit}>
							<h3 className="auth-wrap-head">Sign in</h3>
							<p className="auth-wrap-lead">Please enter your login and password.</p>

							<div className="clearfix">

								<Input
									label="Golos nickname"
									ref={(node) => {
										this.name = node;
									}}
									validation={()=>{}}
								/>
								<Input
									label="Password"
									type="password"
									ref={(node) => {
										this.password = node;
									}}
									validation={()=>{}}
								/>
							</div>
							<button type="submit" className="auth-btn-submit"><span>Sign In</span></button>
						</form>
					</div>
				</div>
			);
		}
	}
}

SignIn.propTypes = {
	signIn: PropTypes.func.isRequired,
};

export default connect(
	state => ({
	}),
	dispatch => ({
	}),
)(SignIn);
