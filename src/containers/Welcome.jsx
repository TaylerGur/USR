import React from 'react';
import { connect } from 'react-redux'
import * as U from '../redux/actions/userDataActions.jsx';
import { withRouter } from 'react-router-dom';
import './Welcome.scss';
// import {Alert} from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import SingIn from '../components/SingIn.jsx';
import SingUp from '../components/SingUp.jsx';
import AlertMessage from '../components/AlertMessage.jsx';
import WelcomeBtnChangeMode from '../components/WelcomeBtnChangeMode.jsx';



class Welcome extends React.Component{
	constructor(props) {
		 super(props);
				 this.state = {
					 Alert: false,
					 textMsg: '',
					 textBtnChangeMode:'Хочу долучитися до Української Студентської Руспубліки',
					 btnChangeMode: false
					//  failAuthReg: false
				 };

	 }
	 componentDidMount(){
		 this.props.dispatch(U.getSessionUser('http://localhost/api/get_session'));
		 console.log('cc' , this.props.userData);
	 }
	 ChangeMode(){
		 	if(this.state.btnChangeMode){
				this.setState({
					btnChangeMode: false,
					textBtnChangeMode:'Хочу долучитися до Української Студентської Руспубліки'
				});
			}else{
				this.setState({
					btnChangeMode: true,
					textBtnChangeMode:'Я вже зареєстрований, і хочу увійти!'
				});
			}

			// 	this.setState({
			// 	btnChangeMode
			// });
	 }
	 singIn(login, password){
						if(this.testOnValid(login, 'text')) return;
						if(this.testOnValid(password, 'password')) return;
						this.props.dispatch(U.editUser('http://localhost/api/get_user',login.value,password.value));
		}
		testOnValid(input, type){

		 let reg = {
			 name: new RegExp("^[A-Za-zА-Яа-яъыёЁЫЪЄЇєїІіэЭ]{2,39}$", "i"),
			 password: new RegExp("^[\\wА-Яа-яъыёЁЫЪЄЇєїІіэЭ]{2,44}$", "i"),
			 text: new RegExp("^\\w{2,19}$", "i"),
			 date: new RegExp('^([0123]\\d\\.[0123]\\d\\.[12][09]\\d\\d)|([12][09]\\d\\d\\-[0123]\\d\\-[0123]\\d)$'),
			 phone: new RegExp('^380(50|95|66|99|63|73|93|67|97|98|68)\\d{7}$', 'i')
		 }
		 let msg = {
			 name: "Ім'я та Прізвище не повинно містити цифри та спец. символи!" ,
			 password: 'Поле для введення Паролю, може містити лише цифри та букви англійського, українського алфавіту!',
			 text: 'Поле для введення Логіну, може містити лише цифри та букви англійського алфавіту!',
			 date: 'Дата Народження, може мати наступний вигляд - "31.12.2012" або "2012-12-31"',
			 phone: 'Мобільний телефон повинен виглядати так: "3809912345678".'
		 }
		 if(input.value.search(reg[type]) == -1){
			 input.classList.add('noValid');
			 this.setState({
				 Alert: true,
				 textMsg: msg[type]
			 });
			 return true;
		 }else{
				 input.classList.remove('noValid');
				 this.setState({
					 Alert: false,
					 textMsg: ''
				 });
		 }
	 }
		singUp(name, firstName, born, phone, login, pass, againPass){


			if(this.testOnValid(name, 'name')) return;
			if(this.testOnValid(firstName, 'name')) return;
			if(this.testOnValid(born, 'date')) return;
			if(this.testOnValid(phone, 'phone')) return;
			if(this.testOnValid(login, 'text')) return;
			if(this.testOnValid(pass, 'password')) return;
			if(this.testOnValid(againPass, 'password')) return;

			if(pass.value !== againPass.value){
				console.log('passs!');
			}

		}
		validateForm(input, type){
			switch (type) {
				case 'text':
					if(input.value.search(/^\w+$/i) == -1){
						input.classList.add('noValid');
					}else{
						input.classList.remove('noValid');
					}
					break;
				case 'date':
					if(input.value.search(/^[\d\.\-]+$/i) == -1){
					// if(input.value.search(/^380(50|95|66|99|63|73|93|67|97|98|68)\d{7}$/i) == -1){
						input.classList.add('noValid');
					}else{
						input.classList.remove('noValid');
					}
					break;
				case 'phone':
					if(input.value.search(/^\d+$/i) == -1){
					// if(input.value.search(/^380(50|95|66|99|63|73|93|67|97|98|68)\d{7}$/i) == -1){
						input.classList.add('noValid');
					}else{
						input.classList.remove('noValid');
					}
					break;
					case 'password':
						if(input.value.search(/^[\wА-Яа-яъыёЁЫЪЄЇєїІіэЭ]+$/i) == -1){
						// if(input.value.search(/^380(50|95|66|99|63|73|93|67|97|98|68)\d{7}$/i) == -1){
							input.classList.add('noValid');
						}else{
							input.classList.remove('noValid');
						}
						break;
			}

		}
		componentDidUpdate(){

        if(this.props.Fail == false && this.props.userData.login && this.props.userData.id)  this.props.history.push(`/id${this.props.userData.id}`);
        if(this.props.Fail != false){

            switch(this.props.Fail){

                case 'Ник занят!':
                    this.setState({ textMsg: 'Логин занят другим пользователем!' });
                    this.setState({ failAuthReg: true});
                     this.props.dispatch(U.fail(false));
                    break;
                case 'Пользователь с таким логином и паролем не найден!':
                    this.setState({ textMsg: 'Пользователь с таким логином и паролем не найден!' });
                    this.setState({ Alert: true});
                    this.props.dispatch(U.fail(false));

									  break;
                }
            }
  }
	render(){
		// console.log(this.props.userData);
		// console.log(this);
		return(
			<div>
					<SingIn validate={this.validateForm.bind(this)} visible={this.state.btnChangeMode} singIn={this.singIn.bind(this)}/>
					<SingUp  validate={this.validateForm.bind(this)} visible={this.state.btnChangeMode} singUp={this.singUp.bind(this)}/>
					<AlertMessage visible={this.state.Alert} text={this.state.textMsg}/>
					<WelcomeBtnChangeMode click={this.ChangeMode.bind(this)} text={this.state.textBtnChangeMode}/>
			</div>


			);
	}
}
function mapToStateProps(state) {
	return{
		userData: state.userData,
		Fail : state.userData.fail
	}
}

export default withRouter(connect(mapToStateProps)(Welcome));
