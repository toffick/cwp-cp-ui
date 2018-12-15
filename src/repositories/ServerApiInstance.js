import axios from 'axios'
import qs from 'qs'
import { querySerializer } from "../helpers/query";


class ServerApiInstance {
	constructor() {

		this.defaultParams = {
			baseURL: SERVER_HOST,
			paramsSerializer: (params) => {

				const serParams = querySerializer(params);
                const queryString = qs.stringify(serParams, { indices: false, skipNulls: true });

				return queryString;
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
	 * @param {Object=} params
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
