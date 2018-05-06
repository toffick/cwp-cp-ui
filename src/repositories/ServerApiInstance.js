import axios from 'axios'
import qs from 'qs'

class ServerApiInstance {
	constructor() {
		this.defaultParams = {
			baseURL: SERVER_HOST,
			//TODO 'eq' => '='
			paramsSerializer: (params) => {
				console.log(params, 'params');
				return qs.stringify(params, { delimiter: ',', indices: false })
			},
			credentials: 'same-origin',
		}
	}

	/**
	 *
	 * @param {String} url
	 * @param {Object} data
	 * @return {Promise}
	 */
	createPost(url, data) {
		return axios(
			url,
			{
				...this.defaultParams,
				method: 'POST',
				data
			});
	}

	/**
	 *
	 * @param {String} url
	 * @param {Object} params
	 * @return {Promise}
	 */
	createGet(url, params) {
		return axios(url,
			{
				...this.defaultParams,
				method: 'GET',
				params
			});
	}
}

export default new ServerApiInstance();
