import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import UserActions from "../../actions/UserActions";
import { connect } from "react-redux";

class Layout extends React.Component {

	componentWillMount() {
		this.props.checkAuth();
	}

	render() {
		return (
			<div>
				<div className="header">
					<Header/>
				</div>
				<div className="main">
					<div className="content">
						<div className="inner">
							{this.props.children}
						</div>
					</div>
					<div className="footer">
						<Footer/>
					</div>
				</div>
			</div>
		)
	}
}


export default connect(
	state => ({}),
	dispatch => ({
		checkAuth: () => dispatch(UserActions.checkAuth())
	}),
)(Layout);
