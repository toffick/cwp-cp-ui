import SomeReducer from '../reducers/SomeReducer';

export default class SomeActions {
	static setSomeField(maxNumber) {
		return dispatch => {
			dispatch(SomeReducer.actions.setSomeField(Math.random() * maxNumber));
		};
	}
}
