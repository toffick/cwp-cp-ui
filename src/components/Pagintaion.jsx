import React from 'react';

export default class Pagination extends React.Component {

	onClickHandler(value) {
		this.props.changeParameters({ page: value });
		this.props.setItems();
	}

	getPagintion() {
		const paginationObj = this.props.pagination;
		const paginationButtons = [];

		paginationButtons.push((<a style={{fontWeight: 'bold'}} onClick={e => this.onClickHandler(paginationObj.first)}>{'<<'}</a>))

		if (paginationObj.prevprev) {
			paginationButtons.push((
				<a onClick={e => this.onClickHandler(paginationObj.prevprev)}>{paginationObj.prevprev}</a>))
		}

		if (paginationObj.prev) {
			paginationButtons.push((<a onClick={e => this.onClickHandler(paginationObj.prev)}>{paginationObj.prev}</a>))
		}

		paginationButtons.push((
			<a className="active"
			   onClick={e => this.onClickHandler(paginationObj.current)}>{paginationObj.current}</a>))

		if (paginationObj.next) {
			paginationButtons.push((
				<a onClick={e => this.onClickHandler(paginationObj.next)}>{paginationObj.next}</a>))
		}

		if (paginationObj.nextnext) {
			paginationButtons.push((
				<a onClick={e => this.onClickHandler(paginationObj.nextnext)}>{paginationObj.nextnext}</a>))
		}

		paginationButtons.push((<a  style={{fontWeight: 'bold'}} onClick={e => this.onClickHandler(paginationObj.last)}>{'>>'}</a>))

		return paginationButtons;
	}

	render() {
		return (
			<div className="pagination_wrap">
				<div className="pagination">
					{this.getPagintion()}
				</div>
			</div>
		);
	}

}
