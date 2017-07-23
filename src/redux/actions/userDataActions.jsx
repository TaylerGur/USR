import axios from 'axios';

export const EDIT_USER = 'EDIT_USER';
export const FAIL = 'FAIL';


export function getSessionUser(url){
	return (dispatch) => {
		return axios.post(url)
			.then((response) => {
	            if(response.data){
	               dispatch({type: EDIT_USER, payloads: response.data});
	            }
	            else{
	            	dispatch({type: FAIL , payloads: response});
	            }
	          })
	          .catch(function (error) {
	            	dispatch({type: FAIL , payloads: error});
	          });
	}
}
export function editUser(url, log, pass){
	return (dispatch) => {
		return axios.post(url, {
	            nick: log,
	            pass:  pass
	    	})
	    	.then((response) => {
	            if(response.data == 'Ник занят!') {
	            	dispatch({type: FAIL , payloads: 'Ник занят!'});
	            }
	            if(response.data == 'USER_NOT_FOUND!') {
	            	dispatch({type: FAIL , payloads: 'Пользователь с таким логином и паролем не найден!'});

	            }
	            if(response.data.login != ''){
	               dispatch({type: EDIT_USER, payloads: response.data});
	            }
	          })
	          .catch(function (error) {
	            	dispatch({type: FAIL , payloads: error});
	          });
	 }
}


export function fail(f) {
  // if (id == '' || !id) return { type: FAIL };
  return { type: FAIL, payloads: f };
}


//
// export function editNickName(NickName) {
//   // if (NickName === '' || !NickName) return { type: FAIL };
//   return { type: EDIT_NICK, payloads: NickName };
// }
//
//
// export function editId(id) {
//   // if (id == '' || !id) return { type: FAIL };
//   return { type: EDIT_ID, payloads: id };
// }
