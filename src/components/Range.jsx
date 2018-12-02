import React from 'react';
import InputRange from "react-input-range";

const { queryOperators } = require('../../config/constants');

export default class Range extends React.PureComponent {

    constructor(props) {
        super(props);

        this.onChangeCompleteHundler = this.onChangeCompleteHundler.bind(this);
        this.state = {
            value: { min: this.props.min, max: this.props.max },
            name: this.props.title.toLowerCase()
        };
    }

    onChangeCompleteHundler(value) {
        const { name } = this.state;

        if (value.min !== this.state.value.min) {
            if (value.min !== this.props.min)
                this.props.add({ name, value: value.min, operator: queryOperators.GREATE });
            this.props.remove({ name, value: this.state.value.min });
        } else if (value.max !== this.state.value.max) {
            if (value.max !== this.props.max)
                this.props.add({ name, value: value.max, operator: queryOperators.LESSE });
            this.props.remove({ name, value: this.state.value.max });
        }

        this.setState({ value })
    }


    render() {
        return (
            <div className="range_inputs_item">
                <span>{this.props.title}</span>
                <br/>
                <br/>
                <InputRange
                    maxValue={this.props.max}
                    minValue={this.props.min}
                    value={this.state.value}
                    onChange={this.onChangeCompleteHundler}
                />
            </div>
        );
    }
}
