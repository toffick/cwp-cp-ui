import { createModule } from 'redux-modules';
import { Map } from "immutable";

const initActor = {
	name: '',
	id: 0,
	photoUrl: '',
	bday: ''
};

export default createModule({
	name: 'actor',
	initialState: Map({
		actor: { ...initActor },
		movies: [],
		error: null
	}),
	transformations: {
		setActor: {
			reducer: (state, { payload }) => {
				const { actor } = payload;

				return state.set('actor', actor);
			}
		},
		setMovies: {
			reducer: (state, { payload }) => {
				const { movies } = payload;

				return state.set('movies', movies);
			}
		},
		setError: {
			reducer: (state, { payload }) => {
				const { error } = payload;

				return state.set('error', error);
			}
		},
		restore: {
			reducer: (state, { payload }) => {
				return state.set('movies', []).set('actor', { ...initActor }).set('error', null);
			}
		}
	},
});
