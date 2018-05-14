import React from 'react';
import { NavLink } from "react-router-dom";

export default class ReviewItem extends React.PureComponent {

	_getFormattedDate() {
		const d = new Date(this.props.review.datestamp);
		return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
	}

	render() {
		const { text, mark, user } = this.props.review;
		return (
			<div className="review_item">
				<div>
					<NavLink to={`/profile/${user.id}`}>{user.name}</NavLink> <span className="rating">{mark}</span>
				</div>
				<p>{text}</p>
				<div className="datestamp">{this._getFormattedDate()}</div>
			</div>
		);
	}
}
