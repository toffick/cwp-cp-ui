import MovieReducer from '../reducers/MovieReducer';
import ServerApiInstance from '../repositories/ServerApiInstance';

export default class MovieActions {
	static getMovie() {
		return async (dispatch, getState) => {
			try {
				const { data } = await ServerApiInstance.createGet('/api/v1/movies', { ...parameters });

				const { movies } = data.payload;
				dispatch(MovieReducer.actions.setPagination({ pagination}));
			} catch (e) {
				console.error(e);
			}
		};
	}

}
