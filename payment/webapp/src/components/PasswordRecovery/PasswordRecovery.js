import React, { Component } from 'react';

import Modalexit from '../Modal-exit/Modal-exit';
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class PasswordRecovery extends Component {
  	constructor(props) {
  		super(props);
  		this.state = {
    		email: ''
  		};
  		this.state = {
    		password: ''
  		};
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event) {
		event.preventDefault();
		console.log('form submitted and email value is', this.state.email);
	}

	handleEmailChange(event) {
		console.log('handleEmailChange', this);
		this.setState({email: event.target.value});
	}

	render() {
	    return (
	    	<div className="PasswordRecovery">
		    	<div className="wrapper">
					<div className="Modaltop clearfix">
						<div className="title">
							ВІДНОВЛЕННЯ ПАРОЛЮ
						</div>
						<Modalexit />
					</div>
				</div>
				<div className="wrapper">
					<form onSubmit={this.handleSubmit} className="ExitForm" >
						<div className="ExitForm__title">
							E-MAIL
						</div>
						<input
						type="text"
						placeholder=""
						value={this.state.email}
						onChange={this.handleEmailChange}
						/>
              			<div className="Modalnext-container">
							<button >
								<Link to={`${process.env.PUBLIC_URL}/PasswordRecoveryFinish`} className="btn btn-black" >
									ВІДПРАВИТИ
								</Link>
							</button>
						</div>
					</form>
				</div>
				<div className="NoCabinet">
					<div className="wrapper">
						<div className="NoCabinet__title">
							ЗГАДАЛИ ПАРОЛЬ?
						</div>
						<div className="Modalnext-container">
							<Link to={`${process.env.PUBLIC_URL}/Exit`} className="btn btn-black" >
								УВІЙТИ
							</Link>
						</div>
					</div>
				</div>
			</div>
	    );
  	}
}

export default PasswordRecovery;