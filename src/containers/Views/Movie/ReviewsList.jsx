import React from 'react';
import ReviewItem from './ReviewItem';

export default class ReviewsList extends React.PureComponent {

	render() {

		return (
			<div className="reviews_list">
				{
					this.props.reviews.map((review, index) => (<ReviewItem key={index} review={review}/>))
				}
			</div>
		);
	}
}
