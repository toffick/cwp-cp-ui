import UserReducer from '../reducers/UserReducer';
import ServerApiInstance from '../repositories/ServerApiInstance';

export default class UserActions {
	static signIn(email, password) {
		return async dispatch => {
			try {

				const { data } = await ServerApiInstance.createPost('/auth/login', {
					email,
					password
				});

				if (!data.success) {
					dispatch(UserReducer.actions.wrongCredentials(true));
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

				const { data } = await ServerApiInstance.createPost('/auth/logout');

				if (!data.success) {
					console.log(data.error);
				} else {
					dispatch(UserReducer.actions.logout());
				}
			} catch (e) {
				console.log(e);
			}
		};
	}

	static checkAuth() {
		return async dispatch => {
			try {
				const { data } = await ServerApiInstance.createPost('/auth/check-auth');

				if (data.success) {
					dispatch(UserReducer.actions.signIn({ userId: data.user.id }));
				}
			} catch (e) {
				console.log(e);
			}
		};
	}

	static wrongCredentialsDisable(){
		return dispatch =>{
			dispatch(UserReducer.actions.wrongCredentials(false));
		}
	}
}
