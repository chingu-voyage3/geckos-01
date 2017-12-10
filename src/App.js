import React, { Component } from 'react';
import HeadingNav from './components/heading-nav';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import $ from 'jquery';

class App extends Component {
	render() {
		return (
			<div className="App">
				<HeadingNav />
			</div>
		);
	}
}

export default App;
