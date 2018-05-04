import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className="global-wrap">
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		)
	}
}
