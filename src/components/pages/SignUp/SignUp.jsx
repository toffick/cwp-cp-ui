import React from 'react';
import Input from '../../elements/Input';
import { validateName, validatePassword } from '../../../helpers/auth';

export default class SignUp extends React.Component {
	handleSubmit(e) {
		const validateParams = { needToSetState: true };
		if (this.name.validate(validateParams)
			|| this.password.validate(validateParams)
			|| this.confirmPassword.validate(validateParams)
		) {
			e.preventDefault();
			return;
		}

		const name = this.name.value();
		const password = this.password.value();
	}

	render() {
		console.log(this);
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
								this.name = node;
							}}
							validation={validateName}
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
								if (value !== password) { return 'Passwords are different'; }
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
