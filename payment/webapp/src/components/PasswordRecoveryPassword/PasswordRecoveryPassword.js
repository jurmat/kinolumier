import React, { Component } from 'react';

import Modalexit from '../Modal-exit/Modal-exit';
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class PasswordRecoveryPassword extends Component {
  	constructor(props) {
  		super(props);
  		this.state = {
    		passwordfin: ''
  		};
  		this.state = {
    		password: ''
  		};
		this.handlepasswordfinChange = this.handlepasswordfinChange.bind(this);
		this.handlepasswordChange = this.handlepasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event) {
		event.preventDefault();
		console.log('form submitted and passwordfin value is', this.state.passwordfin);
	}

	handlepasswordfinChange(event) {
		console.log('handlepasswordfinChange', this);
		this.setState({passwordfin: event.target.value});
	}
	handlepasswordChange(event) {
		console.log('handlepasswordChange', this);
		this.setState({password: event.target.value});
	}

	render() {
	    return (
	    	<div className="PasswordRecoveryPassword">
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
							НОВИЙ ПАРОЛЬ
						</div>
						<input
						type="password"
						placeholder=""
						value={this.state.passwordfin}
						onChange={this.handlepasswordfinChange}
						/>
						<div className="ExitForm__title">
							ПІДТВЕРДИТИ НОВИЙ ПАРОЛЬ
						</div>
						<input
						type="password"
						placeholder=""
						value={this.state.password}
						onChange={this.handlepasswordChange}
						/>
              			<div className="Modalnext-container">
							<button >
								<Link to={`${process.env.PUBLIC_URL}/PasswordRecoveryExit`} className="btn btn-black" >
									ВІДПРАВИТИ
								</Link>
							</button>
						</div>
					</form>
				</div>
			</div>
	    );
  	}
}

export default PasswordRecoveryPassword;