import React from 'react';

class MainFooter extends React.PureComponent {
	render() {
		const currentYear = new Date().getFullYear();
		return (
			<footer>
				<div>
					{currentYear} CinRtgn
				</div>
			</footer>
		);
	}
}

export default MainFooter;
