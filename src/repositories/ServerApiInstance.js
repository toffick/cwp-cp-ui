import axios from 'axios'
import qs from 'qs'

const { queryOperators } = require('../../config/constants');

class ServerApiInstance {
	constructor() {

		this.defaultParams = {
			baseURL: SERVER_HOST,
			paramsSerializer: (params) => {

				if (params.filter) {
					params.filter = params.filter
						.map(item => `${item.name} ${queryOperators[item.operator]} ${item.value}`)
						.join(', ');
				}

				if (params.sort) {
					params.sort = `${params.sort.name} ${params.sort.side}`;
				}

				return qs.stringify(params, { indices: false, skipNulls: true })
			},
			validateStatus: (status) => {
				return status >= 200 && status < 430;
			},
			withCredentials: true,
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
