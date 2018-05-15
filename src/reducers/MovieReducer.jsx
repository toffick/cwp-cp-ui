import { createModule } from 'redux-modules';
import { Map } from "immutable";

const initMovie = {
	actors: [],
	director: "",
	genres: [],
	id: 0,
	plot: "",
	posterUrl: "",
	rating: 0,
	ratingCount: 0,
	runtime: 0,
	title: "",
	year: 1900
};

export default createModule({
	name: 'movie',
	initialState: Map({
		movie: { ...initMovie },
		reviews: [],
		error: null
	}),
	transformations: {
		setMovie: {
			reducer: (state, { payload }) => {
				const { movie } = payload;

				return state.set('movie', movie);
			}
		},
		setError: {
			reducer: (state, { payload }) => {
				const { error } = payload;

				return state.set('error', error);
			}
		},
		setReviews: {
			reducer: (state, { payload }) => {
				const { reviews } = payload;

				return state.set('reviews', reviews);
			}
		},
		addReview: {
			reducer: (state, { payload }) => {
				const { review } = payload;

				const reviews = state.get('reviews');

				return state.set('reviews', [review, ...reviews]);
			}
		},
		restore: {
			reducer: (state, { payload }) => {
				return state.set('reviews', []).set('movies', { ...initMovie }).set('error', null);
			}
		}
	},
});
