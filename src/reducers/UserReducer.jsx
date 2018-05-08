import { createModule } from 'redux-modules';
import { Map } from "immutable";

const initialState = Map({
	isAuth: false,
	userId: null,
});

export default createModule({
	name: 'user',
	initialState,
	transformations: {
		signIn: {
			reducer: (state, { payload }) => {
				const { userId } = payload;

				return state.set('userId', userId).set('isAuth', true);
			}
		},
		logout: {
			reducer: (state, { payload }) => {
				return state.set('userId', null).set('isAuth', false);
			}
		}
	},
});
