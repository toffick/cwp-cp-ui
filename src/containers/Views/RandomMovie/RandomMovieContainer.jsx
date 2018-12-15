import React from 'react';
import connect from "react-redux/es/connect/connect";
import RandomMovieActions from '../../../actions/RandomMovieActions';
import FilterPanel from './FilterPanel';
import RandomMovie from "./RandomMovie";

class RandomMovieContainer extends React.Component {

    componentDidMount() {
        this.props.setRandomMovie();
    }

    render() {

        const {randomMovie} = this.props;

        return (

            <div className="actors_container">
                <FilterPanel onSubmitForm={this.props.setRandomMovie}/>
                <div style={{paddingLeft: '300px'}}>
                    <RandomMovie randomMovie={randomMovie}/>
                </div>
            </div>
        );
    }

}

export default connect(
    state => ({
        randomMovie: state.randommovie.get('movie'),
    }),
    dispatch => ({
        setRandomMovie: () => dispatch(RandomMovieActions.setRandomMovie()),
}),
)(RandomMovieContainer);
