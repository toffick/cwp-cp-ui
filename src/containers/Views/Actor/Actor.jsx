import React from 'react';
import {connect} from "react-redux";
import ActorActions from "../../../actions/ActorActions";
import NoMatch from "../NoMatch";
import {NavLink} from "react-router-dom";
import ReviewsList from "../../../components/ReviewsList";
import MovieActions from "../../../actions/MovieActions";

class Actor extends React.PureComponent {

    componentWillMount() {
        const {id} = this.props.match.params;
        this.props.getActor(id);
    }


    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        this.props.restore();
    }

    getAverageRating() {
        let rating = 0;
        let count = 0;

        this.props.movies.forEach(item => {
            if (item.rating > 0) {
                rating += item.rating;
                count++;
            }
        });


        return count ? (rating / count).toFixed(1) : '';
    }

    getMomivesList() {
        return this.props.movies.map((movie, i) =>
            (
                <li key={i}>
                    <NavLink to={`/movies/${movie.id}`}
                             className="link"><span>{movie.title} <small>({movie.year})</small></span></NavLink>
                </li>
            ))
    }

    render() {
        const {actor, error} = this.props;

        if (error) {
            return (<NoMatch message={error}/>)
        }

        const averageRating = this.getAverageRating();

        return (
            <div className="center">
                <div className="actor_container">
                    <div className="actors_item">
                        <img src={actor.photoUrl}/>
                        <div className="description">
                            <div className="title_rating">
                                <h2>{actor.name}</h2>
                            </div>
                            <table>
                                <thead></thead>
                                <tbody>
                                <tr>
                                    <td>Birthday:</td>
                                    <td><b>{actor.bday}</b></td>
                                </tr>
                                <tr>
                                    <td>Movies count:</td>
                                    <td>{this.props.movies.length}</td>
                                </tr>
                                <tr>
                                    <td>Average rating:</td>
                                    <td><b>{averageRating}</b></td>
                                </tr>
                                <tr>
                                    <td>Country:</td>
                                    <td><b>{actor.country}</b></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr/>
                    <div className="filmography">
                        <h3>Filmography</h3>
                        {<ul>{this.getMomivesList()}</ul>}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        actor: state.actor.get('actor'),
        error: state.actor.get('error'),
        movies: state.actor.get('movies'),
    }),
    dispatch => ({
        getActor: (id) => dispatch(ActorActions.getActor(id)),
        restore: () => dispatch(ActorActions.restore()),
    }),
)(Actor);
