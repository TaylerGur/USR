import React from 'react';


class WelcomeBtnChangeMode extends React.Component{

	render(){
		return(
			<div className='WelcomeBtnChangeMode'>
        <input type="button" value={this.props.text} onClick={() => this.props.click()}/>
			</div>


			);
	}
}

export default WelcomeBtnChangeMode;
