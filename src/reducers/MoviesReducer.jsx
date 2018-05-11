import { createModule } from 'redux-modules';
import { Map } from "immutable";

const initialState = Map({
	movies: [],
	parameters: {
		limit: 10,
		offset: 0,
		filter: null,
		sort: null
	}
});

export default createModule({
	name: 'movies',
	initialState,
	transformations: {
		getAll: {
			reducer: (state, { payload }) => {
				const { movies } = payload;

				return state.set('movies', movies);
			}
		}
	},
});
