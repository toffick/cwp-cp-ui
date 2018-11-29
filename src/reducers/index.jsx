import UserReducer from './UserReducer';
import MoviesReducer from './MoviesReducer';
import MovieReducer from './MovieReducer';
import ActorReducer from './ActorReducer';
import ActorsReducer from './ActorsReducer';

export default {
	user: UserReducer.reducer,
	movies: MoviesReducer.reducer,
	movie: MovieReducer.reducer,
    actor: ActorReducer.reducer,
    actors: ActorsReducer.reducer,
};
