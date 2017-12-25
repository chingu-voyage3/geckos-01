import React, { Component } from 'react';
import HeadingNav from './components/heading-nav';
import ProgressBar from './components/progress-bar';
import LearningContent from './components/learning-content';
import Milestone from './components/milestone';
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

				<div className="container">
				  	<div className="row">
				  		<div className="col-9 col-sm-9">

				  			<LearningContent />

				  		</div>
				  		<div className="col-3 col-sm-3 milestones">
				  			<h4>Module Milestones</h4>
				  			<Milestone />

				  		</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default App;
