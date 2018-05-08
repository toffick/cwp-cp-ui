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
			<div className="global-wrap">
				<Header/>
				{this.props.children}
				<Footer/>
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
