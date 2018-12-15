import React from 'react';
import {NavLink} from "react-router-dom";

export default class RandomMovie extends React.Component {

    render() {


        const {randomMovie} = this.props;

        if (!randomMovie) {
            return (<h2>Not found :(</h2>)
        }

        const {posterUrl, rating, country, title, id} = randomMovie;

        return (
            <NavLink to={`/movies/${id}`} exact className="logo" style={{textDecoration: 'none'}}>
                <div className="random__movie__container">
                    <img src={posterUrl}/>
                    <div>
                        <div className="title">
                            {title}
                        </div>
                        <div className="random__movie__description">
                            <span>Country <b>{country}</b></span>
                            <span>Rating <b>{rating.toFixed(1)}</b></span>
                        </div>
                    </div>
                </div>
            </NavLink>
        )

    }
}
