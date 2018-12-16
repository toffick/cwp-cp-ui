import React from 'react';
import {connect} from 'react-redux';
import countries from '../../../helpers/countries';

class MovieCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);

        this.state = {
            movie: {
                title: '',
                plot: '',
                year: '',
                runtime: '',
                posterUrl: '',
                country: countries[0],
                actors: '',
                genres: '',
                director: ''
            },
            errors: []
        }
    }

    getCountrySelect() {
        return (
            <select name="country" value={this.state.movie.country} onChange={this.onFieldChange} defaultValue={countries[0]}>
                {countries.map((country) => (<option value={country}>{country}</option>))}
            </select>
        )
    }

    validate() {
        const errors = [];

        if (!this.state.movie.title.length || this.state.movie.title.length > 256) {
            errors.push('Invalid field title');
        }

        if (!this.state.movie.plot.length || this.state.movie.plot.length > 2000) {
            errors.push('Invalid description field');
        }

        if (!this.state.movie.year.length || isNaN(this.state.movie.year) || +this.state.movie.year < 1900) {
            errors.push('Invalid year field');
        }

        if (!this.state.movie.runtime.length || isNaN(this.state.movie.runtime) || +this.state.movie.runtime < 0) {
            errors.push('Invalid runtime field');
        }

        if (!this.state.movie.posterUrl) {
            errors.push('Invalid posterUrl field');
        }

        if (!this.state.movie.country.length) {
            errors.push('Invalid country field');
        }

        if (!this.state.movie.actors.length || !/(\d+,)*\d$/.test(this.state.movie.actors)) {
            errors.push('Invalid actors field');
        }

        if (!this.state.movie.genres.length || !/(\d+,)*\d$/.test(this.state.movie.genres)) {
            errors.push('Invalid genres field');
        }

        if (!this.state.movie.director.length || this.state.movie.director.length > 256) {
            errors.push('Invalid director field');
        }

        if (errors.length) {
            this.setState({errors});
            return false;
        }

        return true;
    }

    onSubmitHandler(e) {
        e.preventDefault();

        if (!this.validate()) {
            return;
        }

        this.setState({errors: []});

        this.props.onSubmit(this.state.movie);
    }


    onFieldChange(e) {
        e.preventDefault();

        const {value, name} = e.target;

        this.setState({movie: {...this.state.movie, [name]: value}})

    }

    render() {

        return (
            <form onSubmit={this.onSubmitHandler}>
                <div className="create__movie__input">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.movie.title} onChange={this.onFieldChange}/>
                </div>
                <div className="create__movie__input">
                    <label htmlFor="plot">Plot</label>
                    <textarea name="plot" value={this.state.movie.plot} onChange={this.onFieldChange}/>
                </div>
                <div className="create__movie__input">
                    <label htmlFor="director">Director</label>
                    <input type="text" name="director" value={this.state.movie.director} onChange={this.onFieldChange}/>
                </div>
                <div className="create__movie__input">
                    <label htmlFor="year">Production year</label>
                    <input type="text" name="year" value={this.state.movie.year} onChange={this.onFieldChange}/>
                </div>
                <div className="create__movie__input">
                    <label htmlFor="runtime">Runtime <small>(in minutes)</small></label>
                    <input type="text" name="runtime" value={this.state.movie.runtime} onChange={this.onFieldChange}/>
                </div>
                <div className="create__movie__input">
                    <label htmlFor="posterUrl">Poster URL</label>
                    <input type="text" name="posterUrl" value={this.state.movie.posterUrl}
                           onChange={this.onFieldChange}/>
                </div>
                <div className="create__movie__input">
                    <label htmlFor="countries">Production country</label>
                    {this.getCountrySelect()}
                </div>
                <div className="create__movie__input">
                    <label htmlFor="actors">Enter actors ids <small>(through comma)</small></label>
                    <input type="text" name="actors" value={this.state.movie.actors} onChange={this.onFieldChange}/>
                </div>
                <div className="create__movie__input">
                    <label htmlFor="genres">Enter genres ids <small>(through comma)</small></label>
                    <input type="text" name="genres" value={this.state.movie.genres} onChange={this.onFieldChange}/>
                </div>
                <div style={{width: '100%', textAlign: 'center'}}>
                    <input type="submit" value="Create movie" className="button"
                           style={{maxWidth: '100%', marginTop: '30px'}}/>
                </div>
                <div className="form__error">
                    {this.state.errors.map((error) => (<p>{error}</p>))}
                </div>
            </form>
        )
    }

}

export default connect(
    state => ({
        isAuth: state.user.get('isAuth'),
        role: state.user.get('role'),
    }),
    dispatch => ({}),
)(MovieCreateForm);
