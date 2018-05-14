import React from 'react';
import { connect } from "react-redux";
import MovieActions from "../../../actions/MovieActions";
import NoMatch from "../NoMatch";
import { NavLink } from "react-router-dom";
import ReviewsList from "./ReviewsList";
import ReviewInput from "./ReviewInput";

class Movie extends React.PureComponent {

	componentWillMount() {
		const { id } = this.props.match.params;
		this.props.getMovie(id);
	}

	_getActors(actors) {
		return actors.map(actor => (<NavLink to={`/actors/${actor.id}`}>{actor.name} </NavLink>))
	}

	render() {
		console.log(this.props, 'render');
		if (this.props.error) {
			return (<NoMatch message={this.props.error}/>)
		}
		const { posterUrl, rating, genres, title, year, plot, actors, runtime, director } = this.props.movie;

		return (
			<div className="movie_container">
				<div className="movies_item">
					<img src={posterUrl}/>
					<div className="description">
						<div className="title_rating">
							<h3>{title} ({year})</h3>
							<span className="rating">{rating.toFixed(1)}</span>
						</div>

						<table>
							<tr>
								<td>Director:</td>
								<td><b>{director}</b></td>
							</tr>
							<tr>
								<td>Genres:</td>
								<td><b>{genres.map(({ name }) => name).join(', ')}</b></td>
							</tr>
							<tr>
								<td>Actors:</td>
								<td>{this._getActors(actors)}</td>
							</tr>
							<tr>
								<td>Runtime:</td>
								<td><b>{runtime}</b></td>
							</tr>
						</table>
						<p>{plot}</p>

					</div>
				</div>
				<div className="review_container">
					<ReviewInput addReview={this.props.addReview}/>
					<ReviewsList reviews={this.props.reviews}/>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		movie: state.movie.get('movie'),
		error: state.movie.get('error'),
		reviews: state.movie.get('reviews')
	}),
	dispatch => ({
		getMovie: (id) => dispatch(MovieActions.getMovie(id)),
		addReview: (review) => dispatch(MovieActions.addReview(review)),
	}),
)(Movie);
