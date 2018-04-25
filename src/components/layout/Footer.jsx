import React from 'react';

class MainFooter extends React.PureComponent {
	render() {
		const currentYear = new Date().getFullYear();
		return (
			<footer>
				<div>
					<img height={16} src={ImgGolos} alt="" />
					{currentYear} CinRtg
				</div>
			</footer>
		);
	}
}

export default MainFooter;
