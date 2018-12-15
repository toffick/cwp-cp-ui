import React from 'react';
import connect from "react-redux/es/connect/connect";
import {NavLink} from "react-router-dom";

class RecommendationsContainer extends React.Component {

    //TODO
    //1. добавить расстояние между рекомендациями
    //2. выровнять лоигн регитрацию и главную страницу

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
                {this.props.isAuth ?
                    <div className="recommendations__items">
                        <p className="title">Also recommended</p>
                        {this._getRecommendationsList()}
                    </div>
                    :
                    null
                }

            </div>
        );
    }

}

export default connect(
    state => ({
        isAuth: state.user.get("isAuth"),
        recommendations: state.recommendations.get('recommendations'),
    }),
    dispatch => ({}),
)(RecommendationsContainer);
