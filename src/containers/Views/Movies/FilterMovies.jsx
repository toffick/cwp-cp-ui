import React from 'react';
import Range from '../../../components/range';

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
			this.props.changeParametersHandler({ sort: { name: value, side: this.state.sortSide } })
		} else {
			this.props.changeParametersHandler({ sort: { name: this.state.sortName, side: value } })
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
							   add={this.props.addFilterHandler}
							   remove={this.props.removeFilterHandler}/>
						<Range title="Runtime"
							   min={1}
							   max={300}
							   add={this.props.addFilterHandler}
							   remove={this.props.removeFilterHandler}/>
						<Range title="Rating"
							   min={1}
							   max={10}
							   add={this.props.addFilterHandler}
							   remove={this.props.removeFilterHandler}/>
					</div>
					<div className="button" onClick={this.props.setMovies}>
						Search
					</div>
				</div>
			</div>
		);
	}

}
