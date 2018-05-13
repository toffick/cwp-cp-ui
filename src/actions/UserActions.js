import UserReducer from '../reducers/UserReducer';
import ServerApiInstance from '../repositories/ServerApiInstance';
import { toast } from "react-toastify";
import Cookies from 'universal-cookie';

export default class UserActions {
	static signIn(email, password) {
		return async (dispatch, getState) => {
			try {
				const { data } = await ServerApiInstance.createPost('/auth/login', {
					email,
					password
				});

				if (!data.success) {
					toast.error(JSON.stringify(data.error.message), {
						position: toast.POSITION.TOP_RIGHT,
						autoClose: 3000,
						hideProgressBar: true
					});
				} else {
					const user = data.payload;
					dispatch(UserReducer.actions.signIn({ userId: user.id, role: user.role }));
				}
			} catch (e) {
				console.error(e);
			}
		};
	}

	static signUp(email, password) {
		return async (dispatch, getState) => {
			try {
				const { data } = await ServerApiInstance.createPost('/auth/registration', {
					email,
					password
				});

				if (!data.success) {
					toast.error(JSON.stringify(data.error.message), {
						position: toast.POSITION.TOP_RIGHT,
						autoClose: 3000,
						hideProgressBar: true
					});
				} else {
					const message = data.payload.message;

					toast.success(JSON.stringify(message), {
						position: toast.POSITION.TOP_RIGHT,
						autoClose: 5000,
						hideProgressBar: true
					});
				}
			} catch (e) {
				console.error(e);
			}
		};
	}

	static logout() {
		return async (dispatch, getState) => {
			try {
				const { data } = await ServerApiInstance.createPost('/auth/logout');

				if (!data.success) {
					toast.warn(JSON.stringify(data.error.message), {
						position: toast.POSITION.TOP_RIGHT,
						autoClose: 3000,
						hideProgressBar: true
					});
				} else {
					dispatch(UserReducer.actions.logout());
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
					dispatch(UserReducer.actions.signIn({ userId: user.id, role: user.role }));
				}
			} catch (e) {
				console.error(e);
			}
		};
	}

}
