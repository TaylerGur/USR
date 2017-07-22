import React from 'react';

import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import axios from 'axios';


class Welcome extends React.Component{
	create_session(){
		// console.log()
		axios.post('api/create_session', {
			login: this.log.value,
			password: this.pass.value
		}).then((res) =>{
			alert('yeeeeee');
		}).catch((err) =>{
			console.error(err);
		});
	}
	render(){
		return(
			<div>
				<div>
					логин<input type="text" name="login" ref={(log) => {this.log = log}}/>
				</div>
				<div>
					пароль<input type="password" ref={(pass) => {this.pass = pass}} name="password"/>
				</div>
				<div>
					<input type='button' value="Create session" onClick={() => this.create_session()}/>
				</div>
			</div>


			);
	}
}

export default Welcome;