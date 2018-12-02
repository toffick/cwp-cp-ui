import React from 'react';
import { connect } from "react-redux";
import MovieActions from "../../../actions/MovieActions";
import NoMatch from "../NoMatch";
import { NavLink } from "react-router-dom";
import ReviewsList from "../../../components/ReviewsList";
import ReviewInput from "./ReviewInput";

//TODO не сразу удаляется состояние стэйта
class Movie extends React.PureComponent {

	componentWillMount() {
		const { id } = this.props.match.params;
		this.props.getMovie(id);
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	componentWillUnmount() {
		this.props.restore();
	}

	_getActors(actors) {
		return actors.map((actor, i) => (<NavLink  className="link" key={i} to={`/actors/${actor.id}`}>{actor.name} </NavLink>))
	}

	render() {
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
							<thead></thead>
							<tbody>
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
								<td><b>{runtime}</b> min</td>
							</tr>
							</tbody>
						</table>
						<p>{plot}</p>

					</div>
				</div>
				<hr/>
				<div className="review_container">
					{this.props.isAuth? <ReviewInput addReview={this.props.addReview}/>: null}
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
		reviews: state.movie.get('reviews'),
		isAuth: state.user.get('isAuth')
	}),
	dispatch => ({
		getMovie: (id) => dispatch(MovieActions.getMovie(id)),
		addReview: (review) => dispatch(MovieActions.addReview(review)),
		restore: () => dispatch(MovieActions.restore()),
	}),
)(Movie);
