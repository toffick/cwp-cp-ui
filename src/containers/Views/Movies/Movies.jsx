import React from 'react';
import {connect} from 'react-redux';
import MoviesActions from '../../../actions/MoviesActions';
import FilterDashboard from './FilterMovies';
import Pagination from '../../../components/Pagintaion';
import MovieItem from './MovieItem';
import RecommendationsContainer from '../RecommendationsContainer';

class MoviesListContainer extends React.Component {

    getMovies() {
        return this.props.moviesList.map((movie, i) => (
            <li key={i}>
                <MovieItem movie={movie}/>
                <hr/>
            </li>))
    }

    componentDidMount() {
        this.props.setMovies();
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        this.props.resetParameters();
    }

    render() {
        return (
                <div className="movies_container">
                    <FilterDashboard
                        changeParametersHandler={this.props.changeParameters}
                        addFilterHandler={this.props.addFilter}
                        removeFilterHandler={this.props.removeFilter}
                        setMovies={this.props.setMovies}
                        sort={this.props.parameters.sort}
                    />
                    <div className="movies_list">
                        <hr/>
                        <ul>
                            {this.getMovies()}
                        </ul>
                        {
                            this.props.moviesList.length ?
                                (<Pagination
                                    changeParameters={this.props.changeParameters}
                                    setItems={this.props.setMovies}
                                    pagination={this.props.pagination}
                                />)
                                :
                                null
                        }

                    </div>
                    <br/>
                    <RecommendationsContainer/>
                </div>
        );
    }
}

export default connect(
    state => ({
        moviesList: state.movies.get('movies'),
        pagination: state.movies.get('pagination'),
        parameters: state.movies.get('parameters'),
    }),
    dispatch => ({
        setMovies: () => dispatch(MoviesActions.setMovies()),
        changeParameters: (parameters) => dispatch(MoviesActions.changeParameters(parameters)),
        addFilter: (filter) => dispatch(MoviesActions.addFilter(filter)),
        removeFilter: (filter) => dispatch(MoviesActions.removeFilter(filter)),
        resetParameters: () => dispatch(MoviesActions.resetParameters()),
    }),
)(MoviesListContainer);
