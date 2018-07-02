import React, { Component } from 'react';
import { connect } from 'react-redux'



import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';



class TiketsForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: ''
      };
      super(props);
      this.state = {
        oldpassword: ''
      };
      super(props);
      this.state = {
        newpassword: ''
      };
      super(props);
      this.state = {
        repeatpassword: ''
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
    this.handleoldpasswordChange = this.handleoldpasswordChange.bind(this);
    this.handlenewpasswordChange = this.handlenewpasswordChange.bind(this);
    this.handlerepeatpasswordChange = this.handlerepeatpasswordChange.bind(this);
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
  handleoldpasswordChange(event) {
    console.log('handleoldpasswordChange', this);
    this.setState({oldpassword: event.target.value});
  }
  handlenewpasswordChange(event) {
    console.log('handlenewpasswordChange', this);
    this.setState({newpassword: event.target.value});
  }
  handlerepeatpasswordChange(event) {
    console.log('handlerepeatpasswordChange', this);
    this.setState({repeatpassword: event.target.value});
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
      <div className="TiketsForm">
        <div className="wrapper2">
        <div className="PersonalData">
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
              <div className="btn-center clearfix">
                <a href="#" className="btn btn-black">
                  КУПИТИ БІЛЕТИ
                </a>
               </div>
                 <div className="TiketsForm__WARNING clearfix">
                  Увага! ви будуте перенаправлені на сторінку оплати
                </div>
              </form>
              </div>
             </div>
      </div>
    );
  }
}


export default TiketsForm;