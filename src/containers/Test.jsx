import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import axios from 'axios';


class Test extends React.Component{

	render(){
		return(
			<div>
				<a href="/out">exit</a>
				<h3>Это тест!!!!!!!!</h3>
				<h3>"Это тес</h3>
				<h3>Это тест11111222!</h3>

				<img src="/public/img/Captain.jpg" />
			</div>


			);
	}
}

export default Test;
