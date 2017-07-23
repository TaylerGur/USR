import React from 'react';


class SingUp extends React.Component{

	render(){
		return(
			<div className={this.props.visible ? 'SingIn': 'no-visible'}>
      <h4>Реєстрація</h4>
				<div>
					<input type="text" ref={(name) => {this.name = name}} onChange={() => this.props.validate(this.name, 'text')} placeholder="Ім'я"/>
				</div>
				<div>
					<input type="text" ref={(firstName) => {this.firstName = firstName}} onChange={() => this.props.validate(this.firstName , 'text')} placeholder="Прізвище"/>
				</div>
        <div>
					<input type="date" ref={(born) => {this.born = born}} onChange={() => this.props.validate(this.born , 'date')} placeholder="Дата народження"/>
				</div>
        <div>
					<input type="text" ref={(phone) => {this.phone = phone}} onChange={() => this.props.validate(this.phone , 'phone')} placeholder="Номер мобільного телефону"/>
				</div>
        <div>
          <input type="text" ref={(log) => {this.log = log}} onChange={() => this.props.validate(this.log , 'text')} placeholder="Логін"/>
				</div>
        <div>
          <input type="password" ref={(pass) => {this.pass = pass}} onChange={() => this.props.validate(this.pass , 'password')} name="password" placeholder="Пароль"/>
				</div>
        <div>
          <input type="password" ref={(againPass) => {this.againPass = againPass}} onChange={() => this.props.validate(this.againPass , 'password')} name="password" placeholder="Ще раз пароль"/>
				</div>
				<div>
					<input type='button' value="Поїхали!!!" onClick={() => this.props.singUp(this.name, this.firstName,  this.born, this.phone,  this.log,this.pass, this.againPass)}/>
				</div>
			</div>


			);
	}
}

export default SingUp;
