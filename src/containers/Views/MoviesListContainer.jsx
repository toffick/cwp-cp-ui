import React from 'react';
import { connect } from "react-redux";
import MoviesActions from "../../actions/MoviesActions";
import FilterDashboard from "../Panels/FilterDashboard";
import Pagination from "../Panels/Pagintaion";

class MoviesListContainer extends React.Component {

	componentWillMount() {
		this.props.getAll();
	}

	render() {
		return (<div>
				<FilterDashboard/>
				<h1>Home</h1>
				<Pagination/>
			</div>
		);
	}
}

export default connect(
	state => ({
		moviesList: state.movies.get('movies'),
	}),
	dispatch => ({
		getAll: () => dispatch(MoviesActions.getAll())
	}),
)(MoviesListContainer);
