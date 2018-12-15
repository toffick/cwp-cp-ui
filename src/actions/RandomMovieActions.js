import ServerApiInstance from '../repositories/ServerApiInstance';
import RandomMovieReducer from '../reducers/RandomMovieReducer';

export default class RandomMovieActions {
    static setRandomMovie() {
        return async (dispatch, getState) => {
            try {
                const parameters = {
                    countries: getState().randommovie.get('countries').join(','),
                    rating: getState().randommovie.get('rating')
                };

                const {data} = await ServerApiInstance.createGet('/api/v1/movies/random', {...parameters});
                const movie = data.payload && data.payload.movie;

                dispatch(RandomMovieReducer.actions.setMovie({movie}));

            } catch (e) {
                console.error(e);
            }
        };
    }

    static setRating(newRating) {
        return (dispatch, getState) => {
            dispatch(RandomMovieReducer.actions.setRating({newRating}));
        };
    }

    static addCountry(country) {
        return (dispatch, getState) => {
            dispatch(RandomMovieReducer.actions.addCountry({country}));
        };
    }

    static removeCountry(removedCountry) {
        return (dispatch, getState) => {
            dispatch(RandomMovieReducer.actions.removeCountry({removedCountry}));
        };
    }

}
