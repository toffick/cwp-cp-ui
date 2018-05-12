import React from 'react';

export default class Home extends React.PureComponent {

	render() {
		return (
			<div className="movies_item">
				<img src={this.props.movie.posterUrl}/>
				<div className="description">
					<div className="title_rating">
						<h3>{this.props.movie.title}</h3>
						<span className="rating">{this.props.movie.rating.toFixed(1)}</span>
					</div>
				</div>
			</div>
		);
	}

}
