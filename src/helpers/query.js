const {queryOperators} = require('../../config/constants');

const fieldNormalizeCreator = () => {
    const matchField = {
        genre: 'genre.name'
    };

    return (field) => matchField[field] || field;
};

const valueNormalizeCreator = () => {
    const matchOperator = {
        [queryOperators.LIKE]: (value) => `%${value}%`
    };

    return (operator, oldValue) => matchOperator[operator] && matchOperator[operator](oldValue) || oldValue;
};

export const querySerializer = (params) => {
    const normalizeField = fieldNormalizeCreator();
    const normalizeValue = valueNormalizeCreator();

    if (params.filter && params.filter.length) {
        params.filter = params.filter
            .map((item) => {
                const {operator, value, name} = item;
                return `${normalizeField(name)} ${operator} ${normalizeValue(operator, value)}`
            })
            .join(', ');
    }

    if (params.sort) {
        params.sort = `${params.sort.name} ${params.sort.side}`;
    }

    return params;
};
