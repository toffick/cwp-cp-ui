import UserReducer from './UserReducer';
import MoviesReducer from './MoviesReducer';

export default {
	user: UserReducer.reducer,
	movies: MoviesReducer.reducer,
};
