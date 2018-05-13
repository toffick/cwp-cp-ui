import React from 'react';
import { NavLink } from "react-router-dom";

export default class Movie extends React.PureComponent {

	render() {
		console.log(this.props);
		return (
			<div className="movies_item">
				Movie
			</div>
		);
	}

}
