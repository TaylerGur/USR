import React from 'react';


class AlertMessage extends React.Component{

	render(){
		return(
			<div className={this.props.visible ? 'AlertMessage' : 'no-visible'}>
        <p>{this.props.text}</p>
			</div>


			);
	}
}

export default AlertMessage;
