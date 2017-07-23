import {  FAIL,  EDIT_USER } from '../actions/userDataActions.jsx';

const initialState = {id:0, nickName:"", fail: false};

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_USER:
      let data = action.payloads;
      return {
        fail: false,
        login : data.login,
        id : data.id,
        born: data.born,
        name: data.name,
        firstName: data.firstName,
        phone: data.phone

      };
    case FAIL:
      return {
        fail: action.payloads,
        nickName : state.nickName,
        login : state.login,
        born : state.born,
        name: state.name,
        firstName : state.firstName,
        phone : state.phone
      };
    default:
      return state;
  }
}
