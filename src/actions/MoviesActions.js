import MoviesReducer from '../reducers/MoviesReducer';
import ServerApiInstance from '../repositories/ServerApiInstance';

export default class UserActions {
	static getAll() {
		return async (dispatch, getState) => {
			try {
				const parameters = {...getState().movies.get('parameters')};
				const { data } = await ServerApiInstance.createGet('/api/v1/movies', { ...parameters });

				const movies = data.payload.movies;
				dispatch(MoviesReducer.actions.getAll({ movies }));
			} catch (e) {
				console.error(e);
			}
		};
	}

}
