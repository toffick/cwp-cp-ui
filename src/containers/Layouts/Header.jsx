import { connect } from 'react-redux';
import React from 'react';
import UserActions from "../../actions/UserActions";
import { FlatButton } from "material-ui";
import NavLink from "react-router-dom/es/NavLink";

class Header extends React.PureComponent {
	render() {
		return (
			<div className="layout__header">
				<NavLink to="/" exact className="logo">
					<h1>
						CinRtgn
					</h1>
				</NavLink>

				<div className="buttons">
					<NavLink to="/movies" exact className="item">
						MOVIES
					</NavLink>
					<NavLink to="/actors" exact className="item">
						ACTORS
					</NavLink>
				</div>
				{this.props.isAuth ?
					(<div className="buttons">
						<NavLink to="/profile" exact className="item">
							PROFILE
						</NavLink>
						<NavLink to="/" exact className="item" onClick={this.props.logout}>
							LOGOUT
						</NavLink>
					</div>)
					:
					(<div className="buttons">
						<NavLink to="/sign-up" exact className="item">
							SIGN UP </NavLink>
						<NavLink className="item" to="/sign-in" exact activeClassName="active">
							SIGN IN </NavLink>
					</div>)}
			</div>
		);
	}
}

export default connect(
	state => ({
		isAuth: state.user.get("isAuth"),
	}),
	dispatch => ({
		logout: () => dispatch(UserActions.logout())
	}),
)(Header);
