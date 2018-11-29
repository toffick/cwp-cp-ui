import ActorsReducer from '../reducers/ActorsReducer';
import ServerApiInstance from '../repositories/ServerApiInstance';

export default class ActorsActions {
	static setActors() {
		return async (dispatch, getState) => {
			try {
				const parameters = {
					...getState().actors.get('parameters'),
					filter: [...getState().actors.get('filters')]
				};
				const { data } = await ServerApiInstance.createGet('/api/v1/actors', { ...parameters });

				const { actors } = data.payload;
                const { pagination } = data.payload.meta;

                //TODO говно, не делайте так
				dispatch(ActorsReducer.actions.setActors({ actors }));
				dispatch(ActorsReducer.actions.setPagination({ pagination }));
			} catch (e) {
				console.error(e);
			}
		};
	}

	static changeParameters(parameters) {
		return async (dispatch, getState) => {
			dispatch(ActorsReducer.actions.changeParameters({ parameters }));
		}
	}

	static addFilter(filter) {
		return async (dispatch, getState) => {
			dispatch(ActorsReducer.actions.addFilter({ filter }));
		}
	}

	static removeFilter(filter) {
		return async (dispatch, getState) => {
			dispatch(ActorsReducer.actions.removeFilter({ filter }));
		}
	}

	static resetParameters() {
		return async (dispatch, getState) => {
			dispatch(ActorsReducer.actions.resetParameters());
		}
	}
}
