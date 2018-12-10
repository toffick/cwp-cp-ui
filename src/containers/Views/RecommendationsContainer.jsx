import React from 'react';
import connect from "react-redux/es/connect/connect";
import {NavLink} from "react-router-dom";

class RecommendationsContainer extends React.Component {

    _getRecommendationsList() {
        console.log(this.props.recommendations);
        return this.props.recommendations.map((item) =>
            (
                <div className="recommendations__item">
                    <NavLink to={`/movies/${item.id}`} className="title_rating_link">
                        <img src={item.posterUrl}/>
                    </NavLink>
                </div>
            ))
    }

    render() {
        return (
            <div>
                <div className="recommendations__items">
                    <p className="title">Also recommended</p>
                    {this._getRecommendationsList()}
                </div>
            </div>
        );
    }

}

export default connect(
    state => ({
        recommendations: state.recommendations.get('recommendations'),
    }),
    dispatch => ({}),
)(RecommendationsContainer);
