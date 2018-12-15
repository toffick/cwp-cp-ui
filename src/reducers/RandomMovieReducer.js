import {createModule} from 'redux-modules';
import {Map} from "immutable";
import countries from '../helpers/countries';

const initParameters = {
    countries,
    rating: 1,
    movie: null
};

export default createModule({
    name: 'randommovie',
    initialState: Map(initParameters),
    transformations: {
        setMovie: {
            reducer: (state, {payload}) => {
                const {movie} = payload;

                return state.set('movie', movie);
            }
        },
        setRating: {
            reducer: (state, {payload}) => {
                const {newRating} = payload;
                console.log(newRating);
                return state.set('rating', newRating);
            }
        },
        addCountry: {
            reducer: (state, {payload}) => {
                const {country} = payload;

                return state.set('countries', [...state.get('countries'), country]);
            }
        },
        removeCountry: {
            reducer: (state, {payload}) => {
                const {removedCountry} = payload;

                const newCountries = state.get('countries').filter((country) => removedCountry !== country);

                return state.set('countries', newCountries);
            }
        }
    },
});
