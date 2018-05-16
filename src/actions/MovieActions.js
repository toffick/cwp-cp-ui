import MovieReducer from '../reducers/MovieReducer';
import ServerApiInstance from '../repositories/ServerApiInstance';
import ToastWrapper from "../helpers/toast";

export default class MovieActions {
	static getMovie(id) {
		return async (dispatch, getState) => {
			try {
				const { data } = await ServerApiInstance.createGet(`/api/v1/movies/${id}`);

				if (!data.success) {
					dispatch(MovieReducer.actions.setError({ error: data.error.message }));
				} else {
					dispatch(MovieReducer.actions.setMovieReviews({ movie: data.payload, reviews: data.payload.reviews }));
				}
			} catch (e) {
				console.error(e);
			}
		};
	}

	static addReview(review) {
		return async (dispatch, getState) => {
			try {

				const movie = getState().movie.get('movie');
				const userId = getState().user.get('userId');
				const name = getState().user.get('name');

				const { data } = await ServerApiInstance.createPost(`/api/v1/users/${userId}/reviews`, {
					...review,
					movieId: movie.id
				});

				if (!data.success) {
					ToastWrapper.error(data.error.message);
				} else {
					dispatch(MovieReducer.actions.addReview({
						review: {
							...data.payload,
							user: { id: userId, name }
						}
					}));
				}

			} catch (e) {
				console.error(e);
			}
		};
	}

	static restore() {
		return (dispatch, getState) => {
			dispatch(MovieReducer.actions.restore());
		};
	}
}
