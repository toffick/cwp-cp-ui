import {createModule} from 'redux-modules';
import {Map} from "immutable";

const initParameters = {
    limit: 15,
    page: 1,
    sort: {name: 'name', side: 'asc'}
};

export default createModule({
    name: 'actors',
    initialState: Map({
        actors: [],
        pagination: {},
        parameters: {
            ...initParameters
        },
        filters: []
    }),
    transformations: {
        setActors: {
            reducer: (state, {payload}) => {
                const {actors} = payload;

                return state.set('actors', actors);
            }
        },
        changeParameters: {
            reducer: (state, {payload}) => {
                const {parameters} = payload;
                return state.set('parameters', {...state.get('parameters'), ...parameters});
            }
        },
        addFilter: {
            reducer: (state, {payload}) => {
                const {filter} = payload;

                return state.set('filters', [...state.get('filters'), filter])
                    .set('parameters', {...state.get('parameters'), ...{page: 1}});
            }
        },
        removeFilter: {
            reducer: (state, {payload}) => {
                const {filter} = payload;

                const filters = [...state.get('filters')]
                    .filter(item => !(item.name === filter.name && item.value === filter.value));

                return state.set('filters', filters)
                    .set('parameters', {...state.get('parameters'), ...{page: 1}});
            }
        },
        resetParameters: {
            reducer: (state, {payload}) => {
                return state.set('parameters', {...initParameters}).set('filters', []);
            }
        },
        setPagination: {
            reducer: (state, {payload}) => {
                const {pagination} = payload;

                return state.set('pagination', pagination);
            }
        }
    },
});
