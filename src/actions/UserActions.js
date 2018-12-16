import UserReducer from '../reducers/UserReducer';
import ServerApiInstance from '../repositories/ServerApiInstance';
import ToastWrapper from '../helpers/toast';
import MovieReducer from "../reducers/MovieReducer";

export default class UserActions {
	static signIn(email, password) {
		return async (dispatch, getState) => {
			try {
				const { data } = await ServerApiInstance.createPost('/auth/login', {
					email,
					password
				});

				if (!data.success) {
					ToastWrapper.error(data.error.message);
				} else {
					const user = data.payload;
                    dispatch(UserReducer.actions.signIn({ userId: user.id, role: user.role, name: user.name }));
				}
			} catch (e) {
				console.error(e);
			}
		};
	}

	static signUp(email, password, name) {
		return async (dispatch, getState) => {
			try {
				const { data } = await ServerApiInstance.createPost('/auth/registration', {
					email,
					password,
					name
				});

				if (!data.success) {
					ToastWrapper.error(data.error.message);
				} else {
					ToastWrapper.success(data.payload.message);
				}

			} catch (e) {
				console.error(e);
			}
		};
	}

	static logout() {
		return async (dispatch, getState) => {
			try {
				dispatch(UserReducer.actions.logout());

				const { data } = await ServerApiInstance.createPost('/auth/logout');

				if (!data.success) {
					ToastWrapper.warn(data.error.message);
				}
			} catch (e) {
				console.error(e);
			}
		};
	}

	static checkAuth() {
		return async (dispatch, getState) => {
			try {
				const { data } = await ServerApiInstance.createPost('/auth/check-auth');

				if (data.success) {
					const user = data.user;
                    dispatch(UserReducer.actions.signIn({ userId: user.id, role: user.role, name: user.name }));
				}
			} catch (e) {
				console.error(e);
			}
		};
	}

}
