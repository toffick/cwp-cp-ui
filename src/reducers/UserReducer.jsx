import { createModule } from 'redux-modules';
import { Map } from "immutable";

const initialState = Map({
	isAuth: false,
	userId: null,
	role: '',
});

export default createModule({
	name: 'user',
	initialState,
	transformations: {
		signIn: {
			reducer: (state, { payload }) => {
				const { userId, role } = payload;

				return state.set('userId', userId).set('isAuth', true).set('role', role);
			}
		},
		logout: {
			reducer: (state, { payload }) => {
				return state.set('userId', null).set('isAuth', false).set('role', '');
			}
		}
	},
});
