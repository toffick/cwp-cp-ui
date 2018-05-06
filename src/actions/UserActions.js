import UserReducer from '../reducers/UserReducer';
import axios from 'axios';
import ServerApiInstance from '../repositories/ServerApiInstance';

export default class UserActions {
	static signIn(email, password) {
		return async dispatch => {
			try {

				const { data } = await ServerApiInstance.createPost('/auth/login', {
					email,
					password
				});
				console.log(data);
				if (!data.success) {
					console.log('wrong credentials', data.error);
				} else {
					dispatch(UserReducer.actions.signIn({ userId: data.user.id }));
				}
			} catch (e) {
				console.log(e);
			}
		};
	}

	static logout() {
		return async dispatch => {
			try {

				const res = await ServerApiInstance.createGet('/auth/logout');

				if (res.success) {
					console.log('wrong credentials', res.error);
				} else {
					dispatch(UserReducer.actions.signIn({ userId: res.id }));
				}
			} catch (e) {
				console.log(e);
			}
		};
	}
}
