import React from 'react';

export default class Home extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<div>
				<h1>Welcome to SinRtgn </h1>
				<p>Here you can see the films you are interested in and rate with the review to
					everyone. You can also watch the actors and the filmography of each	</p>
			</div>
		);
	}

}
