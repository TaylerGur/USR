import React      from 'react';
import ReactDOM   from 'react-dom';
import {Routes} from './Routes.jsx';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore.jsx';



const store = configureStore();


ReactDOM.render((
	<Provider store={store} > 
		{Routes}
	</Provider>
), document.getElementById('App'));













// const component = (

//     <Router>

//     	<Switch>
//       		<Route component={App1} path="/about" />
//     		<Router component={App} path="/contact" />

//     	</Switch>
//     </Router>
// );

// ReactDOM.render(component, document.getElementById('App'));
