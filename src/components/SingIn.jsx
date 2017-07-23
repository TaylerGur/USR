import React from 'react';


class SingIn extends React.Component{

	render(){
		return(
			<div className={!this.props.visible ? 'SingIn': 'no-visible'}>
      <h4>Заходь;)</h4>
				<div>
					<input type="text" name="login" ref={(log) => {this.log = log}} onChange={() => this.props.validate(this.log, 'text')} placeholder="Логін"/>
				</div>
				<div>
					<input type="password" ref={(pass) => {this.pass = pass}} onChange={() => this.props.validate(this.pass, 'password')} name="password" placeholder="Пароль"/>
				</div>
				<div>
					<input type='button' value="Увійти" onClick={() => this.props.singIn(this.log,this.pass)}/>
				</div>
			</div>


			);
	}
}

export default SingIn;
