import React, { Component } from 'react';
import HeadingNav from './components/heading-nav';
import ProgressBar from './components/progress-bar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import $ from 'jquery';

class App extends Component {
	render() {
		return (
			<div className="App">

				<HeadingNav />

				<h3>Javascript Guide</h3>

				<div class="container">
				<p id="progress-heading">Guide Progress:</p>
					<ProgressBar /> 
				</div>

				
				
			</div>
		);
	}
}

export default App;
