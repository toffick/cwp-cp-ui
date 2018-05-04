import UserReducer from '../reducers/UserReducer';
import axios from 'axios';

export default class UserActions {
	static signIn(email, password) {
		return async dispatch => {
			try {
				const data = await axios.post('http://localhost:9001/auth/login', {
					email,
					password
				});
				console.log(data);
				dispatch(UserReducer.actions.signIn(user.id));
			}catch(e){
				console.log(e);
			}
		};
	}
}
