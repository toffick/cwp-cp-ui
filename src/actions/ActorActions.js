import ActorReducer from '../reducers/ActorReducer';
import ServerApiInstance from '../repositories/ServerApiInstance';
import MovieReducer from "../reducers/MovieReducer";

export default class ActorActions {
	static getActor(id) {
		return async (dispatch, getState) => {
			try {
				const { data: actorData } = await ServerApiInstance.createGet(`/api/v1/actors/${id}`);

				if (!actorData.success) {
					dispatch(ActorReducer.actions.setError({ error: actorData.error.message }));
				} else {
					dispatch(ActorReducer.actions.setActor({ actor: actorData.payload }));
				}

				const { data: filmsData } = await ServerApiInstance.createGet(`/api/v1/actors/${id}/get-movies`);

				if (filmsData.success) {
					dispatch(ActorReducer.actions.setMovies({ movies: filmsData.payload.movies }));
				}

			} catch (e) {
				console.error(e);
			}
		};
	}

	static restore() {
		return (dispatch, getState) => {
			dispatch(ActorReducer.actions.restore());
		};
	}
}
