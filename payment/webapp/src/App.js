import React, { Component } from 'react';
import { connect } from 'react-redux'

import TicketsListNone from './components/TicketsListNone/TicketsListNone';
import TicketsList from './components/TicketsList/TicketsList';
import PaymentMenu from './components/PaymentMenu/PaymentMenu';
import IndexHeader from './components/IndexHeader/IndexHeader';
import DropdownHeader from './components/DropdownHeader/DropdownHeader';
import Modalnextdata from './components/Modalnextdata/Modalnextdata';
import Modalalldata from './components/Modalalldata/Modalalldata';
import Modaldate from './components/Modal-date/Modal-date';
import Modalexit from './components/Modal-exit/Modal-exit';
import Modalinfo from './components/Modal-info/Modal-info';
import Modalnext from './components/Modal-next/Modal-next';
import Modalsession from './components/Modal-session/Modal-session';
import Modaltop from './components/Modal-top/Modal-top';
import Dropdown from './components/Dropdown/Dropdown';
import ModalTwoData from './components/ModalTwoData/ModalTwoData';
import ModalOneData from './components/ModalOneData/ModalOneData';
import Exit from './components/Exit/Exit';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import PasswordRecoveryFinish from './components/PasswordRecoveryFinish/PasswordRecoveryFinish';
import PasswordRecoveryPassword from './components/PasswordRecoveryPassword/PasswordRecoveryPassword';
import PasswordRecoveryExit from './components/PasswordRecoveryExit/PasswordRecoveryExit';
import PurchasedTickets from './components/PurchasedTickets/PurchasedTickets';
import SignupForm from './components/SignupForm/SignupForm';
import IndexPayment from './components/IndexPayment/IndexPayment';
import PersonalData from './components/PersonalData/PersonalData';
import Hall from './components/Hall/Hall';
import chairs from './components/chairs/chairs';
import ModalHall from './components/ModalHall/ModalHall';
import TiketsForm from './components/TiketsForm/TiketsForm';
import TiketsEnd from './components/TiketsEnd/TiketsEnd';
import SignupPage from './components/SignupPage/SignupPage';


import { Redirect } from 'react-router'
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import './App.css';





class App extends Component {
  render() {
    return (
      <div className="App">
            <Route exact={true} path={`${process.env.PUBLIC_URL}/`} component={Exit} />
            <Route  path={`${process.env.PUBLIC_URL}/TiketsEnd`} component={TiketsEnd} />
            <Route path={`${process.env.PUBLIC_URL}/ModalHall`} component={ModalHall} />
            <Route path={`${process.env.PUBLIC_URL}/PersonalData`} component={PersonalData} />
            <Route path={`${process.env.PUBLIC_URL}/IndexPayment`} component={IndexPayment} />
            <Route path={`${process.env.PUBLIC_URL}/SignupPage`} component={SignupPage}  />
            <Route path={`${process.env.PUBLIC_URL}/Exit`} component={Exit} />
            <Route path={`${process.env.PUBLIC_URL}/PasswordRecovery`} component={PasswordRecovery} />
            <Route path={`${process.env.PUBLIC_URL}/PasswordRecoveryPassword`} component={PasswordRecoveryPassword} />
            <Route path={`${process.env.PUBLIC_URL}/PasswordRecoveryExit`} component={PasswordRecoveryExit} />
            <Route path={`${process.env.PUBLIC_URL}/PasswordRecoveryFinish`} component={PasswordRecoveryFinish} />
            <Route path={`${process.env.PUBLIC_URL}/PurchasedTickets`} component={PurchasedTickets} />
            <Route path={`${process.env.PUBLIC_URL}/Modal/Modalsession`} component={Modalsession} />
            <Route path={`${process.env.PUBLIC_URL}/Modal/Modalalldata`} component={Modalalldata} />
          

           
      </div>
    );
  }
}

export default App;