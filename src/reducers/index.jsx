import UserReducer from './UserReducer';
import MoviesReducer from './MoviesReducer';
import MovieReducer from './MovieReducer';

export default {
	user: UserReducer.reducer,
	movies: MoviesReducer.reducer,
	movie: MovieReducer.reducer,
};
