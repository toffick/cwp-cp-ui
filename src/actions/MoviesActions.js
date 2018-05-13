import MoviesReducer from '../reducers/MoviesReducer';
import ServerApiInstance from '../repositories/ServerApiInstance';

export default class MoviesActions {
	static setMovies() {
		return async (dispatch, getState) => {
			try {
				const parameters = {
					...getState().movies.get('parameters'),
					filter: [...getState().movies.get('filters')]
				};
				const { data } = await ServerApiInstance.createGet('/api/v1/movies', { ...parameters });

				const movies = data.payload.movies;
				dispatch(MoviesReducer.actions.setMovies({ movies }));
			} catch (e) {
				console.error(e);
			}
		};
	}

	static changeParameters(parameters) {
		return async (dispatch, getState) => {
			dispatch(MoviesReducer.actions.changeParameters({ parameters }));
		}
	}

	static addFilter(filter) {
		return async (dispatch, getState) => {
			dispatch(MoviesReducer.actions.addFilter({ filter }));
		}
	}

	static removeFilter(filter) {
		return async (dispatch, getState) => {
			dispatch(MoviesReducer.actions.removeFilter({ filter }));
		}
	}
}
