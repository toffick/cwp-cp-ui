const { queryOperators } = require('../../config/constants');

const normaliseFields = (field) => {
	const matchField = {
		genre: 'genre.name'
	};

	return matchField[field] || field;
};

export const querySerializer = (params) => {
	if (params.filter) {
		params.filter = params.filter
			.map(item => `${normaliseFields(item.name)} ${item.operator} ${item.value}`)
			.join(', ');
	}

	if (params.sort) {
		params.sort = `${params.sort.name} ${params.sort.side}`;
	}

	return params;
};
