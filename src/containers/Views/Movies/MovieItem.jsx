import React from 'react';
import { NavLink } from "react-router-dom";

export default class Home extends React.PureComponent {

	render() {
		const { posterUrl, rating, genres, title, year, plot, id, runtime } = this.props.movie;
		return (
			<div className="movies_item">
				<img src={posterUrl}/>
				<div className="description">
					<div className="title_rating">
						<NavLink to={`/movies/${id}`} className="title_rating_link">
							<h3>{title} ({year})</h3>
						</NavLink>
						<span className="rating">{rating.toFixed(1)}</span>
					</div>
					<p>Genres: <b>{genres.map(({ name }) => name).join(', ')}</b></p>
					<p>Runtime: <b>{runtime}</b> min</p>
					<p>{plot.substring(0, 130)}...</p>
				</div>
			</div>
		);
	}

}
