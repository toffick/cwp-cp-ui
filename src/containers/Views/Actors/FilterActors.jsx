import React from 'react';

const {queryOperators} = require('../../../../config/constants');

export default class FilterDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.onEnterValue = this.onEnterValue.bind(this);

        this.filterName = 'name';
        this.throttleTimer = null;
        this.throttleTimeoutMS = 300;

        this.state = {
            value: '',
            valueForSearching: ''
        };
    }

    onEnterValue(e) {
        e.preventDefault();

        this.setState({value: e.target.value});

        clearTimeout(this.throttleTimer);

        this.throttleTimer = setTimeout(() => {

            this.props.removeFilterHandler({name: this.filterName, value: this.state.valueForSearching});
            this.setState({valueForSearching: this.state.value});

            this.props.addFilterHandler({
                name: this.filterName,
                value: this.state.value,
                operator: queryOperators.LIKE
            });

            this.props.setActors();

        }, this.throttleTimeoutMS)

    }

    render() {
        return (
            <div className="filter">
                <div className="filter_options" style={{justifyContent: ''}}>
                    <div className="filter_label">Enter name:</div>
                    <input onChange={this.onEnterValue} value={this.state.name}/>
                </div>
            </div>
        );
    }

}
