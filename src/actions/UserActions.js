import UserReducer from '../reducers/UserReducer';
import ServerApiInstance from '../repositories/ServerApiInstance';
import { toast } from "react-toastify";

export default class UserActions {
	static signIn(email, password) {
		return async dispatch => {
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
					dispatch(UserReducer.actions.signIn({ userId: data.user.id }));
				}
			} catch (e) {
				console.log(e);
			}
		};
	}

	static signUp(email, password) {
		return async dispatch => {
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
					toast.success(JSON.stringify(data.message), {
						position: toast.POSITION.TOP_RIGHT,
						autoClose: 5000,
						hideProgressBar: true
					});
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

}
