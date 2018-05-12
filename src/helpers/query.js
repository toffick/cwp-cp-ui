const { queryOperators } = require('../../config/constants');

export const querySerializer = (params)=>{
	if (params.filter) {
		params.filter = params.filter
			.map(item => `${item.name} ${queryOperators[item.operator]} ${item.value}`)
			.join(', ');
	}

	if (params.sort) {
		params.sort = `${params.sort.name} ${params.sort.side}`;
	}

	return params;
};
