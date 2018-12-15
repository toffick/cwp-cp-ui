import UserReducer from './UserReducer';
import MoviesReducer from './MoviesReducer';
import MovieReducer from './MovieReducer';
import ActorReducer from './ActorReducer';
import ActorsReducer from './ActorsReducer';
import RecommendationsReducer from './RecommendationsReducer';
import RandomMovieReducer from './RandomMovieReducer';

export default {
	user: UserReducer.reducer,
	movies: MoviesReducer.reducer,
	movie: MovieReducer.reducer,
    actor: ActorReducer.reducer,
    actors: ActorsReducer.reducer,
    recommendations: RecommendationsReducer.reducer,
    randommovie: RandomMovieReducer.reducer,
};
