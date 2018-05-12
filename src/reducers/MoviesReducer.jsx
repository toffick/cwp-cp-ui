import { createModule } from 'redux-modules';
import { Map } from "immutable";

const initialState = Map({
	movies: [],
	parameters: {
		limit: 5,
		page: 1,
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
		},
		changeParameters: {
			reducer: (state, { payload }) => {
				const { parameters } = payload;

				return state.set('parameters', {...state.get('parameters'), ...parameters});
			}
		}
	},
});
