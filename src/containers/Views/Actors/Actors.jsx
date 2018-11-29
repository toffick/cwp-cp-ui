import React from 'react';
import {connect} from 'react-redux';
import ActorsActions from '../../../actions/ActorsActions';
import FilterDashboard from './FilterActors';
import Pagination from '../../../components/Pagintaion';
import ActorItem from './ActorItem';
import {NavLink} from "react-router-dom";


const ActorsList = (props) => {
    console.log(props);
    const {actors} = props;

    return (
        <ul className="grid-container">
            {
                actors.map((actor, i) => (
                    <div className="grid-item-container">
                        <NavLink to={`/actors/${actor.id}`} className="grid-item">
                            <ActorItem actor={actor}/>
                        </NavLink>
                    </div>
                ))
            }
        </ul>
    )
}

//TODO говно. дети, используейте PropTypes
class Actors extends React.Component {

    componentDidMount() {
        this.props.setActors();
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        this.props.resetParameters();
    }

    render() {
        return (
            <div className="movies_container">
                <FilterDashboard
                    changeParametersHundler={this.props.changeParameters}
                    addFilterHundler={this.props.addFilter}
                    removeFilterHundler={this.props.removeFilter}
                    setMovies={this.props.setActors}
                    sort={this.props.parameters.sort}
                />
                {
                    this.props.actorsList.length ?
                        (<div className="movies_list">
                            <hr style={{widht: '822px'}}/>
                            <ActorsList actors={this.props.actorsList}/>
                            <Pagination
                                changeParameters={this.props.changeParameters}
                                setItems={this.props.setActors}
                                pagination={this.props.pagination}
                            />
                        </div>)
                        :
                        null
                }

                <br/>
            </div>
        );
    }
}

export default connect(
    state => ({
        actorsList: state.actors.get('actors'),
        pagination: state.actors.get('pagination'),
        parameters: state.actors.get('parameters'),
    }),
    dispatch => ({
        setActors: () => dispatch(ActorsActions.setActors()),
        changeParameters: (parameters) => dispatch(ActorsActions.changeParameters(parameters)),
        addFilter: (filter) => dispatch(ActorsActions.addFilter(filter)),
        removeFilter: (filter) => dispatch(ActorsActions.removeFilter(filter)),
        resetParameters: () => dispatch(ActorsActions.resetParameters()),
    }),
)(Actors);
