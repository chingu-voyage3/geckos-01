import React, { Component } from 'react';
import HeadingNav from './components/heading-nav';
import Milestones from './components/milestones';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import $ from 'jquery';

class App extends Component {
	render() {
		return (
			<div className="App">
				<HeadingNav />
				<Milestones />
			</div>
		);
	}
}

export default App;
