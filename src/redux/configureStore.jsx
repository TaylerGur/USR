import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import dataReducer from './reducers/dataReducer.jsx';
export default function (initialState = {}) {
  const rootReducer = combineReducers({
  	data:dataReducer
  });

  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
