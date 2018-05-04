import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

class Header extends React.PureComponent {
	render() {
		return (
			<header>
				<NavLink to="/" exact activeClassName="active">
					Home
				</NavLink>
				<NavLink to="/actors" exact activeClassName="active">
					Actors
				</NavLink>
				{this.props.isAuth ?
					(<div>
						<NavLink to="/profile" exact activeClassName="active">
							Profile
						</NavLink>
					</div>)
					:
					(<div>
						<NavLink to="/sign-up" exact activeClassName="active">
							Sign Up
						</NavLink>
						<NavLink to="/sign-in" exact activeClassName="active">
							Sign In
						</NavLink>
					</div>)
				}
			</header>
		);
	}
}

export default connect(
	state => ({
		isAuth: state.user.get("isAuth"),
	}),
	dispatch => ({}),
)(Header);
