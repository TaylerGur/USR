import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import userDataReducer from './reducers/userDataReducer.jsx';
export default function (initialState = {}) {
  const rootReducer = combineReducers({
  	userData:userDataReducer
  });

  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
