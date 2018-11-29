import React from 'react';
import InputRange from "react-input-range";

const { queryOperators } = require('../../../../config/constants');

class Range extends React.PureComponent {

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

export default class FilterDashboard extends React.Component {

	constructor(props) {
		super(props);

		this.onChangeSelect = this.onChangeSelect.bind(this);

		this.state = {
			sortName: this.props.sort.name,
			sortSide: this.props.sort.side,
		}
	}

	onChangeSelect(e) {
		const { value, name: fieldName } = e.target;
		//mda
		this.setState({ [fieldName]: value });

		if (fieldName === 'sortName') {
			this.props.changeParametersHundler({ sort: { name: value, side: this.state.sortSide } })
		} else {
			this.props.changeParametersHundler({ sort: { name: this.state.sortName, side: value } })
		}


	}

	render() {
		return (
			<div className="filter">
				<div className="filter_options">
					<div>
						<div className="sorts">
							<div className="sorts_item">
								<span>Sort field</span>
								<select value={this.state.sortName} onChange={this.onChangeSelect} name="sortName">
									<option value="rating"> Rating</option>
									<option value="year"> Year</option>
								</select>
							</div>
							<div className="sorts_item">
								<span>Sort order</span>
								<select value={this.state.sortSide} onChange={this.onChangeSelect} name="sortSide">
									<option value="desc">from high to lower</option>
									<option value="asc">from lower to high</option>
								</select>
							</div>
						</div>
						<Range title="Year"
							   min={1900}
							   max={new Date().getFullYear()}
							   add={this.props.addFilterHundler}
							   remove={this.props.removeFilterHundler}/>
						<Range title="Runtime"
							   min={1}
							   max={300}
							   add={this.props.addFilterHundler}
							   remove={this.props.removeFilterHundler}/>
						<Range title="Rating"
							   min={1}
							   max={10}
							   add={this.props.addFilterHundler}
							   remove={this.props.removeFilterHundler}/>
					</div>
					<div className="button" onClick={this.props.setMovies}>
						Search
					</div>
				</div>
			</div>
		);
	}

}