import React, { Component } from 'react';
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import Welcome from './containers/Welcome.jsx';
import App from './containers/App.jsx';
import test from './containers/test.jsx';


export const Routes =
	(
		<Router >

			      <Switch>
			      	<Route path="/welcome" component={Welcome}/>
			        <Route path="/:id" component={App}/>
			        <Route path="/" component={test}/>



			      </Switch>


  			</Router>
);
