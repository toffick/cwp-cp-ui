import React from 'react';

class FooterLeftMetaBlocks extends React.PureComponent {
	render() {
		return (
			<div >
				<div className="layout__footer__item">
					<a href="https://github.com/toffick/cwp-cp-ui" target="_blank">
						Source code
					</a>
				</div>
			</div>
		)
	}
}

class FooterRightBlock extends React.PureComponent {

	render() {
		const currentYear = new Date().getFullYear();
		return (
			<div >
				2018 - {currentYear} CinRtgn
			</div>
		)
	}
}

class MainFooter extends React.PureComponent {
	render() {
		return (
			<div className="layout__footer">
				<FooterLeftMetaBlocks/>
				<FooterRightBlock/>
			</div>
		);
	}
}

export default MainFooter;
