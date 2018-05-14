import { createModule } from 'redux-modules';
import { Map } from "immutable";

export default createModule({
	name: 'movie',
	initialState: Map({
		movie: {
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
		},
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
				console.log(reviews);
				return state.set('reviews', reviews);
			}
		}
	},
});
