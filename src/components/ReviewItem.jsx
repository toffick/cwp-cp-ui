import React from 'react';
import { NavLink } from "react-router-dom";

export default class ReviewItem extends React.PureComponent {

	_getFormattedDate() {
		const d = new Date(this.props.review.datestamp);
		return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
	}

	render() {
		const { text, mark, user, movie } = this.props.review;

		return (
			<div className="review_item">
				<div className="a_m">
					{
						user ?
							<div><NavLink to={`/profile/${user.id}`}>{user.name}</NavLink></div>
							:
							<div><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></div>
					}
					<div className="review_rating">{mark}</div>
				</div>
				<p>{text}</p>
				<div className="datestamp">{this._getFormattedDate()}</div>
			</div>
		);
	}
}
