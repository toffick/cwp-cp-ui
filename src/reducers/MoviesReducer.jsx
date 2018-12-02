import { createModule } from 'redux-modules';
import { Map } from "immutable";

const initParameters = {
	limit: 5,
	page: 1,
	sort: { name: 'year', side: 'desc'}
};

export default createModule({
	name: 'movies',
	initialState: Map({
		movies: [],
		pagination: {},
		parameters: {
			...initParameters
		},
		filters: []
	}),
	transformations: {
		setMovies: {
			reducer: (state, { payload }) => {
				const { movies } = payload;

				return state.set('movies', movies);
			}
		},
		changeParameters: {
			reducer: (state, { payload }) => {
				const { parameters } = payload;
 				return state.set('parameters', { ...state.get('parameters'), ...parameters });
			}
		},
		addFilter: {
			reducer: (state, { payload }) => {
				const { filter } = payload;

				return state.set('filters', [...state.get('filters'), filter]);
			}
		},
		removeFilter: {
			reducer: (state, { payload }) => {
				const { filter } = payload;

				const filters = [...state.get('filters')]
					.filter(item => !(item.name === filter.name && item.value === filter.value));

				return state.set('filters', filters);
			}
		},
		resetParameters: {
			reducer: (state, { payload }) => {
				return state.set('parameters', { ...initParameters }).set('filters', []);
			}
		},
		setPagination: {
			reducer: (state, { payload }) => {
				const { pagination } = payload;

				return state.set('pagination', pagination);
			}
		}
	},
});
