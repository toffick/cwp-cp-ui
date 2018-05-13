import React from 'react';
import { connect } from "react-redux";
import MoviesActions from "../../../actions/MoviesActions";
import FilterDashboard from "./FilterMovies";
import Pagination from "../../../components/Pagintaion";
import MovieItem from "./MovieItem";

class MoviesListContainer extends React.Component {

	getMovies() {
		return this.props.moviesList.map((movie, i) => (
			<li key={i}>
				<MovieItem movie={movie}/>
				<hr/>
			</li>))
	}

	componentWillMount() {
		this.props.setMovies();
	}

	componentWillUnmount(){
		this.props.resetParameters();
	}

	render() {
		return (
			<div className="movies_container">
				<FilterDashboard
					changeParametersHundler={this.props.changeParameters}
					addFilterHundler={this.props.addFilter}
					removeFilterHundler={this.props.removeFilter}
					setMovies={this.props.setMovies}
				/>
				<div className="movies_list">
					<hr/>
					<ul>
						{this.getMovies()}
					</ul>
					<Pagination
						changeParameters={this.props.changeParameters}
						setItems={this.props.setMovies}
						pagination={this.props.pagination}
					/>
				</div>
				<br/>
			</div>
		);
	}
}

export default connect(
	state => ({
		moviesList: state.movies.get('movies'),
		pagination: state.movies.get('pagination')
	}),
	dispatch => ({
		setMovies: () => dispatch(MoviesActions.setMovies()),
		changeParameters: (parameters) => dispatch(MoviesActions.changeParameters(parameters)),
		addFilter: (filter) => dispatch(MoviesActions.addFilter(filter)),
		removeFilter: (filter) => dispatch(MoviesActions.removeFilter(filter)),
		resetParameters: () => dispatch(MoviesActions.resetParameters()),
	}),
)(MoviesListContainer);
