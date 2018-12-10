import {createModule} from 'redux-modules';
import {Map} from "immutable";

const initParameters = {
   recommendations: []
};

export default createModule({
    name: 'recommendations',
    initialState: Map(initParameters),
    transformations: {
        setRecommendations: {
            reducer: (state, {payload}) => {
                const {recommendations} = payload;
                console.log(recommendations);
                return state.set('recommendations', recommendations);
            }
        }
    },
});
