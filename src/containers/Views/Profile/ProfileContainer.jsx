import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ServerApiInstance from "../../../repositories/ServerApiInstance";
import ReviewItem from "../../../components/ReviewItem";
import ReviewsList from "../../../components/ReviewsList";

class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = { info: {}, reviews: [] };
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		ServerApiInstance.createGet(`/api/v1/users/${this.props.match.params.id}/profile`)
			.then(({ data }) => {
				this.setState({ reviews: data.payload.reviews, info: data.payload })
			});
	}

	getAverage() {
		let mark = 0;

		this.state.reviews.forEach(item => mark += item.mark);
		console.log(this.state.reviews.length !== 0 ? (mark / this.state.reviews.length).toFixed(1) : 'None');
		return this.state.reviews.length !== 0 ? (mark / this.state.reviews.length).toFixed(1) : 'None';
	}

	render() {
		return (

			<div className="review_container profile_container">
				<div className="info">
					<h1>Profile</h1>
					<table style={{ minWidth: '45vh' }}>
						<thead></thead>
						<tbody>
						<tr>
							<td>Name</td>
							<td style={{ textAlign: 'right' }}><b>{this.state.info.name}</b></td>
						</tr>
						<tr>
							<td>Email</td>
							<td style={{ textAlign: 'right' }}><i>{this.state.info.email}</i></td>
						</tr>
						<tr>
							<td>Role</td>
							<td style={{ textAlign: 'right' }}>{this.state.info.role}</td>
						</tr>
						<tr>
							<td>Average mark</td>
							<td style={{ textAlign: 'right' }}>{this.getAverage()}</td>
						</tr>
						</tbody>
					</table>
				</div>
				<br/>
				<br/>
				<p style={{ textAlign: 'left' }}>The list of all user's reviews({this.state.reviews.length})</p>
				<ReviewsList reviews={this.state.reviews}/>
			</div>);
	}

}

export default connect(
	state => ({
		isAuth: state.user.get('isAuth')
	}),
	dispatch => ({}),
)(Profile);
