import React, { Component } from 'react';

import Modalexit from '../Modal-exit/Modal-exit';
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import { Router, Route } from 'react-router'
import axios from 'axios';

class Exit extends Component {
  	constructor(props) {
  		super(props);
  		this.state = {
    		username: ''
  		};
  		this.state = {
    		password: ''
  		};
		this.handleusernameChange = this.handleusernameChange.bind(this);
		this.handlepasswordChange = this.handlepasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event) {
		event.preventDefault();
		console.log('form submitted and email value is');
		 axios.post('http://kinolumiere.bizert.com/payment/index.php/user/login', {
    password: "112233",
    username:"user@gmail.com"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
	}

	handleusernameChange(event) {
		console.log('handleusernameChange', this);
		this.setState({username: event.target.value});
	}
	handlepasswordChange(event) {
		console.log('handlepasswordChange', this);
		this.setState({password: event.target.value});
	}

	render() {
	    return (
	    	<div className="Exit">
		    	<div className="wrapper">
					<div className="Modaltop clearfix">
						<div className="title">
							ВХІД В КАБІНЕТ
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
						value={this.state.username}
						onChange={this.handleusernameChange}
						/>
						<div className="ExitForm__title">
							ПАРОЛЬ
						</div>
						<input
						type="password"
						placeholder=""
						value={this.state.password}
						onChange={this.handlepasswordChange}
						/>
						<div className="SaveMe">
							<label>
	                			<input type="checkbox" />Запам'ятати мене
	              			</label>
              			</div>
              			<Link to={`${process.env.PUBLIC_URL}/PasswordRecovery`} className="ForgotPassword" >
							Забули пароль?
						</Link>
              			<div className="Modalnext-container">
							<Link to={`${process.env.PUBLIC_URL}/IndexPayment`} className="btn btn-black" >
								УВІЙТИ
							</Link>
						</div>
					</form>
				</div>
				<div className="NoCabinet">
					<div className="wrapper">
						<div className="NoCabinet__title">
							НЕМАЄ ОСОБИСТОГО КАБІНЕТУ?
						</div>
						<div className="Modalnext-container">
							<Link to={`${process.env.PUBLIC_URL}/Registration`} className="btn btn-black" >
								РЕЄСТРАЦІЯ
							</Link>
						</div>
					</div>
				</div>
			</div>
	    );
  	}
}

export default Exit;