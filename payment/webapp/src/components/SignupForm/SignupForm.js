import React, { Component } from 'react';
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Modalexit from '../Modal-exit/Modal-exit';
import PropTypes from 'prop-types';

class SignupForm extends Component {
  	constructor(props) {
  		super(props);
  		this.state = {
  			youname: '',
    		surname: '',
    		username: '',
    		password: '',
    		passwordConfirmation: ''
		}
    	this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

  	}


	  	onChange(e) {
			console.log('onChange', this);
			this.setState( { [ e.target.name]: e.target.value });
			
		}
		onSubmit(e) {
			e.preventDefault();
			this.props.userSignupRequest(this.state);
		}
	render() {
	    return (
	    	<div className="Registration">
		    	<div className="wrapper">
					<div className="Modaltop clearfix">
						<div className="title">
							РЕЄСТРАЦІЯ
						</div>
						<Modalexit />
					</div>
				</div>
				<div className="wrapper">
					<form onSubmit={this.onSubmit} className="ExitForm" >
						<div className="ExitForm__title">
							ВАШЕ ІМ'Я
						</div>
						<input
						type="text"
						name="youname"
						className="form-control"
						value={this.state.youname}
						placeholder=""
						onChange={this.onChange}
						/>
						<div className="ExitForm__title">
							ВАШЕ ПРІЗВИЩЕ
						</div>
						<input
						type="text"
						name="surname"
						className="form-control"
						value={this.state.surname}
						placeholder=""
						onChange={this.onChange}
						/>
						<div className="ExitForm__title">
							E-MAIL
						</div>
						<input
						type="text"
						name="username"
						className="form-control"
						value={this.state.username}
						placeholder=""
						onChange={this.onChange}
						/>
						<div className="ExitForm__title">
							ПАРОЛЬ
						</div>
						<input
						type="password"
						placeholder=""
						name="password"
						className="form-control"
						value={this.state.password}
						onChange={this.onChange}
						/>
						<div className="ExitForm__title">
							ПІДТВЕРДЖЕННЯ ПРОЛЮ
						</div>
						<input
						type="password"
						placeholder=""
						className="form-control"
						name="passwordConfirmation"
						value={this.state.passwordConfirmation}
						onChange={this.onChange}
						/>
						<div className="SaveMe SaveMe-Registration">
							<label>
	                			<input type="checkbox" />Я ознайомлений з правилами та умовами
	              			</label>
              			</div>
              			<div className="Modalnext-container">
							<button className="btn btn-black" >
								РЕЄСТРАЦІЯ
							</button>	
						</div>
					</form>
				</div>
				<div className="NoCabinet">
					<div className="wrapper">
						<div className="NoCabinet__title">
							НЕМАЄ ОСОБИСТОГО КАБІНЕТУ?
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


SignupForm.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
}


export default SignupForm;