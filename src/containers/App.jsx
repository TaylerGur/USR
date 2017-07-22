import React from 'react';
// import './App.scss';
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import axios from 'axios';


class App extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	count: 0
	  };
	}
	plus(){
		this.setState({
			count: this.state.count + 1
 		});
	}
	render(){
		return(
			<div>
				<a href="/out">exit</a>
				<h3>Похоже все работает!!!!</h3>
				<h3>Count = {this.state.count}</h3>
				<img src="/dist/img/Captain.gif" />
				<h3>Ну наконец-то!;)</h3>
				<h3>Emmmm.....</h3>
				<input type="button" value='count++' onClick={() => this.plus()}/>
			</div>


			);
	}
}

export default App;