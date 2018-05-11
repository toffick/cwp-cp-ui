import { connect } from 'react-redux';
import React from 'react';
import UserActions from "../../actions/UserActions";
import { FlatButton } from "material-ui";
import NavLink from "react-router-dom/es/NavLink";

class Header extends React.PureComponent {
	render() {
		return (
			<div className="layout__header">
				<h1 className="layout__header__logo">
					CinRtgn
				</h1>
				<div className="layout__header__buttons">
					<NavLink to="/" exact className="layout__header__item">
						MOVIES
					</NavLink>
					<NavLink to="/actors" exact className="layout__header__item">
						ACTORS
					</NavLink>
				</div>
				{this.props.isAuth ?
					(<div className="layout__header__buttons">
						<NavLink to="/profile" exact activeClassName="layout__header__item">
							PROFILE
						</NavLink>
						<FlatButton className="layout__header__item" onClick={this.props.logout}>LOGOUT</FlatButton>
					</div>)
					:
					(<div className="layout__header__buttons">
						<NavLink to="/sign-up" exact className=" layout__header__item">
							SIGN UP </NavLink>
						<NavLink className="layout__header__item" to="/sign-in" exact activeClassName="active">
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
