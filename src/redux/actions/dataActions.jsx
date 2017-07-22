import axios from 'axios';

export const EDIT_NICK = 'EDIT_NICK';
export const EDIT_USER = 'EDIT_USER';
export const EDIT_ID = 'EDIT_ID';
export const FAIL = 'FAIL';
export function getSessionUser(url){
	return (dispatch) => {
		return axios.post(url)
			.then((response) => {
	            if(response.data){
	               dispatch({type: EDIT_USER, payloads: {nick: response.data.nameUser, id: response.data.id}});
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
	            if(response.data == 'Пользователь с таким логином и паролем не найден!') {
	            	dispatch({type: FAIL , payloads: 'Пользователь с таким логином и паролем не найден!'});

	            }
	            if(response.data.nameUser){
	               dispatch({type: EDIT_USER, payloads: {nick: response.data.nameUser, id: response.data.idUser}});
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



export function editNickName(NickName) {
  // if (NickName === '' || !NickName) return { type: FAIL };
  return { type: EDIT_NICK, payloads: NickName };
}


export function editId(id) {
  // if (id == '' || !id) return { type: FAIL };
  return { type: EDIT_ID, payloads: id };
}

export function axi(url){
	return (dispatch) => {
			
		  	axios.post(url)
			  .then(function (response) {
			    if(response.data.nameUser && response.data.id){
					 dispatch(editNickName(response.data.nameUser));
					 dispatch(editId(response.data.id));
					return true;
				}
				else{
					return false;
				}		
					
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
			 
	}
}