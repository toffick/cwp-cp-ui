import React from 'react';

export default class NoMatch extends React.Component {

	render() {
		return (

			<div>
				<h1>Page not found</h1>
				<p>{this.props.message}</p>
			</div>
		);
	}

}
