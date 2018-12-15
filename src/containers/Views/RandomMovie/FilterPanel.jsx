import React from 'react';
import InputRange from "react-input-range";
import countries from '../../../helpers/countries';
import connect from "react-redux/es/connect/connect";
import RandomMovieActions from "../../../actions/RandomMovieActions";

class FilterPanel extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onCheckBoxHandler = this.onCheckBoxHandler.bind(this);
        this.onRatingChangeHandler = this.onRatingChangeHandler.bind(this);

    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.onSubmitForm();
    }


    onCheckBoxHandler(e) {
        const {checked, name} = e.target;

        if (checked) {
            this.props.addCountry(name)
        } else {
            this.props.removeCountry(name)
        }
    }

    onRatingChangeHandler(value) {
        this.props.setRating(value.max);
    }

    getCountriesCheckboxes() {
        return countries.map((value) => {
            //sry
            const checked = !!this.props.countries.find(country => country === value);

            return (
                <div className="country_checkbox_item">
                    <input type="checkbox" id={value} name={value} checked={checked}
                           onClick={this.onCheckBoxHandler}/>
                    <label htmlFor={value}>{value}</label>
                </div>
            )
        });

    }

    render() {
        const {countries, rating} = this.props;
        const rangeValue = {min: 0, max: rating};

        return (
            <div className="random__filter__container">
                <div className="random__filter__box">
                    <form onSubmit={this.onSubmitHandler}>
                        <span className="filter__title">
                            Choose countries
                        </span>
                        <div className="countries_container">
                            {this.getCountriesCheckboxes(countries)}
                        </div>

                        <span className="filter__title">
                            Choose min rating
                        </span>
                        <InputRange
                            name="range-rating"
                            maxValue={10}
                            minValue={0}
                            value={rangeValue}
                            onChange={this.onRatingChangeHandler}
                            step={1}
                        />

                        <div style={{width: '100%', textAlign: 'center'}}>
                            <input type="submit" value="Random it!" className="button"
                                   style={{maxWidth: '100%', marginTop: '30px'}}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default connect(
    state => ({
        countries: state.randommovie.get('countries'),
        rating: state.randommovie.get('rating'),
    }),
    dispatch => ({
        setRating: (rating) => dispatch(RandomMovieActions.setRating(rating)),
        addCountry: (country) => dispatch(RandomMovieActions.addCountry(country)),
        removeCountry: (removedCountry) => dispatch(RandomMovieActions.removeCountry(removedCountry)),
    }),
)(FilterPanel);
