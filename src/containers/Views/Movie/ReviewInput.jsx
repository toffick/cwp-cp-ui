import React from 'react';
import ToastWrapper from '../../../helpers/toast'

//TODO нет имени сразу
export default class ReviewInput extends React.PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			mark: 1,
			review: ''
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.review.length === 0) {
			ToastWrapper.warn('Review shouldn\'t be empty');
			return;
		}

		if (this.state.review.length >= 2000) {
			ToastWrapper.warn('Limit is 2000 chars');
			return;
		}

		this.props.addReview({ mark: this.state.mark, text: this.state.review, datestamp: Date.now() });
		this.setState({mark: 1, review: ''});
	}

	render() {

		return (
			<div className="review_input">
				<div className="container">
					<form onSubmit={e => this.handleSubmit(e)}>
						<label htmlFor="mark">Your mark</label>
						<select id="country" name="mark" value={this.state.mark} onChange={e => this.setState({ mark: +e.target.value })}>
							{'pashalka)0'.split('').map((_, i) => <option key={i}>{i + 1}</option>)}
						</select>

						<label htmlFor="subject">Review</label>
						<textarea id="subject" name="subject" placeholder="Write something.."
								  style={{ height: '200px' }} onChange={e => this.setState({ review: e.target.value })}
								  value={this.state.review}
								  autoComplete="off"/>

						<input type="submit" value="Submit"/>
					</form>
				</div>
			</div>
		);
	}
}
