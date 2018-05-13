import { createModule } from 'redux-modules';
import { Map } from "immutable";

export default createModule({
	name: 'movie',
	initialState: Map({
		movies: {},
	}),
	transformations: {
		setMovie: {
			reducer: (state, { payload }) => {
				const { movie } = payload;

				return state.set('movie', movie);
			}
		}
	},
});
