import { toast } from "react-toastify";

export default class ToastWrapper{
	static warn(){
		toast.warn(JSON.stringify(message), {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: 3000,
			hideProgressBar: true
		});
	}

	static error(message){
		toast.error(JSON.stringify(message), {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: 3000,
			hideProgressBar: true
		});
	}

	static success(message){
		toast.success(JSON.stringify(message), {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: 3000,
			hideProgressBar: true
		});
	}
}
