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
					<div className="layout__header__item">
						<NavLink to="/" exact>
							MOVIES
						</NavLink>
					</div>
					<div className="layout__header__item">
						<NavLink to="/actors" exact className="layout__header__item">
							ACTORS
						</NavLink>
					</div>
				</div>
				<div>
					{this.props.isAuth ?
						(<div>

							<NavLink className="layout__header__item" to="/profile" exact activeClassName="active">
								<span>PROFILE</span>
							</NavLink>
							<FlatButton className="layout__header__item" onClick={this.props.logout}>LOGOUT</FlatButton>
						</div>)
						:
						(<div>
							<NavLink className="layout__header__item" to="/sign-up" exact activeClassName="active">
								<span>SIGN UP</span>
							</NavLink>
							<NavLink className="layout__header__item" to="/sign-in" exact activeClassName="active">
								<span>SIGN IN</span>
							</NavLink>
						</div>)}
				</div>
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
