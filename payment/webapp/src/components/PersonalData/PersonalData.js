import React, { Component } from 'react';
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Modalexit from '../Modal-exit/Modal-exit';

class PersonalData extends Component {
  	constructor(props) {
  		super(props);
  		this.state = {
    		email: ''
  		};

  		super(props);
  		this.state = {
    		name: ''
  		};
  		super(props);
  		this.state = {
    		surname: ''
  		};
  		super(props);
  		this.state = {
    		phone: ''
  		};
  		
		this.handlephoneChange = this.handlephoneChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlesurnameChange = this.handlesurnameChange.bind(this);
		this.handlenameChange = this.handlenameChange.bind(this);
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
	
	handlenameChange(event) {
		console.log('handlenameChange', this);
		this.setState({name: event.target.value});
	}
	handlesurnameChange(event) {
		console.log('handlesurnameChange', this);
		this.setState({surname: event.target.value});
	}
	handlephoneChange(event) {
		console.log('handlephoneChange', this);
		this.setState({phone: event.target.value});
	}
	render() {
	    return (
	    	<div className="PersonalData">
		    	<div className="wrapper">
					<div className="Modaltop clearfix">
						<div className="title">
							ОСОБИСТІ ДАНІ
						</div>
						<Modalexit />
					</div>
				</div>
				<div className="wrapper2">
					<form onSubmit={this.handleSubmit} className="PersonalData__form" >
						<div className="columns">
							<div className="column is-6">
								<div className="ExitForm__title">
									ВАШЕ ІМ'Я
								</div>
								<input
								type="text"
								placeholder=""
								value={this.state.name}
								onChange={this.handlenameChange}
								/>
							</div>
							<div className="column is-6">
								<div className="ExitForm__title">
									ВАШЕ ПРІЗВИЩЕ
								</div>
								<input
								type="text"
								placeholder=""
								value={this.state.surname}
								onChange={this.handlesurnameChange}
								/>
							</div>
						</div>
						<div className="columns">
							<div className="column is-6">
								<div className="ExitForm__title">
									E-MAIL
								</div>
								<input
								type="text"
								placeholder=""
								value={this.state.email}
								onChange={this.handleEmailChange}
								/>
							</div>
							<div className="column is-6">
								<div className="ExitForm__title">
									ТЕЛЕФОН
								</div>
								<input
								type="text"
								placeholder=""
								value={this.state.phone}
								onChange={this.handlephoneChange}
								/>
							</div>

						</div>
						<label>
							<input type="checkbox" /> Згоден отримувати розсилку новин
						</label>
						<div className="сhange-password">
							<div className="title-password">
								ЗМІНА ПАРОЛЮ
							</div>
							<div className="ExitForm__title">
								СТАРИЙ ПАРОЛЬ
							</div>
							<input
							type="text"
							placeholder=""
							value={this.state.oldpassword}
							onChange={this.handleoldpasswordChange}
							/>
							<div className="ExitForm__title">
								НОВИЙ ПАРОЛЬ
							</div>
							<input
							type="text"
							placeholder=""
							value={this.state.newpassword}
							onChange={this.handlenewpasswordChange}
							/>
							<div className="ExitForm__title">
								ПОВТОРИТИ ПАРОЛЬ
							</div>
							<input
							type="text"
							placeholder=""
							value={this.state.repeatpassword}
							onChange={this.handlerepeatpasswordChange}
							/>
						</div>
						<div className="btn-center clearfix">
							<Link to={`${process.env.PUBLIC_URL}/IndexPayment`}  className="btn btn-bg-none">
								ВІДМІНИТИ
							</Link>
							<Link to={`${process.env.PUBLIC_URL}/IndexPayment`} className="btn btn-black">
								ЗБЕРЕГТИ ЗМІНИ
							</Link>
						</div>
					</form>
				</div>
			</div>
	    );
  	}
}

export default PersonalData;