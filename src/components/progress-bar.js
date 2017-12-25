import React, { Component } from "react";
import 'bootstrap';
import 'react-bootstrap';

class ProgressBar extends Component {
	render() {
		return (
			<div className='progress'>
				<div className='progress-bar'
					role='progressbar'
					aria-valuenow='20'
					aria-valuemin='0'
					aria-valuemax='100'
					style={{width: '35%', height: '50px'}}>
					35%
				</div>
			</div>
		)
	}
}
export default ProgressBar;
