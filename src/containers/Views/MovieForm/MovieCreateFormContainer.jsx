import React from 'react';
import {connect} from 'react-redux';
import MovieCreateForm from "./MovieCreateForm";
import MoviesActions from "../../../actions/MoviesActions";

class MovieCreateFormContainer extends React.Component {

    render() {

        return (
            <div className="movie__create__form__wrapper">
                <MovieCreateForm onSubmit={this.props.createMovie}/>
            </div>
        );
    }

}

export default connect(
    state => ({
        isAuth: state.user.get('isAuth'),
        role: state.user.get('role'),
    }),
    dispatch => ({
        createMovie: (movie) => dispatch(MoviesActions.createMovie(movie)),
    }),
)(MovieCreateFormContainer);
