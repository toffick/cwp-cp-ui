import { createModule } from 'redux-modules';
import { Map } from "immutable";

const initialState = Map({
	isAuth: false,
	userId: null,
	role: '',
	name: ''
});

export default createModule({
	name: 'user',
	initialState,
	transformations: {
		signIn: {
			reducer: (state, { payload }) => {
				const { userId, role, name } = payload;
                return state.set('userId', userId).set('isAuth', true).set('role', role).set('name', name);
			}
		},
		logout: {
			reducer: (state, { payload }) => {
				return state.set('userId', null).set('isAuth', false).set('role', '').set('name', name);
			}
		}
	},
});
