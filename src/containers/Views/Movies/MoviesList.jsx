import React from 'react';
import { connect } from "react-redux";
import MoviesActions from "../../../actions/MoviesActions";
import FilterDashboard from "./FilterMovies";
import Pagination from "../../../components/Pagintaion";
import MovieItem from "./MovieItem";

class MoviesListContainer extends React.Component {

	getMovies() {
		return this.props.moviesList.map(movie => (<li><MovieItem movie={movie}/></li>))
	}

	componentWillMount() {
		this.props.getAllMovies();
	}

	render() {
		return (
			<div className="movies_container">
				<FilterDashboard/>
				<div className="movies_list">
					<ul>
						{this.getMovies()}
					</ul>
					<Pagination/>
				</div>
				<br/>
			</div>
		);
	}
}

export default connect(
	state => ({
		moviesList: state.movies.get('movies'),
	}),
	dispatch => ({
		getAllMovies: () => dispatch(MoviesActions.getAll())
	}),
)(MoviesListContainer);
