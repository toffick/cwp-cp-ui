import { createModule } from 'redux-modules';
import { Map } from "immutable";

const initialState = Map({
	isAuth: false,
	userId: null,
	wrongCredentials: false
});

export default createModule({
	name: 'user',
	initialState,
	transformations: {
		signIn: {
			reducer: (state, { payload }) => {
				const { userId } = payload;

				return state.set('userId', userId).set('isAuth', true).set('wrongCredentials', false);
			}
		},
		logout: {
			reducer: (state, { payload }) => {
				return state.set('userId',  null).set('isAuth', false).set('wrongCredentials', false);
			}
		},
		wrongCredentials: {
			reducer: (state, { payload }) => {
				return state.set('wrongCredentials', payload);
			}
		}
	},
});
