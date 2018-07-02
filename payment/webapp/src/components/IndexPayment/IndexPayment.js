import React, { Component } from 'react';
import { connect } from 'react-redux'


import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';

import './IndexPayment.css';
import DropdownHeader from '../DropdownHeader/DropdownHeader';
import IndexHeader from '../IndexHeader/IndexHeader';
import TicketsList from '../TicketsList/TicketsList';
import TicketsListNone from '../TicketsListNone/TicketsListNone';


class IndexPayment extends Component {

  render() {
    return (
    <div className="IndexPayment">
      <IndexHeader />
      <Route exact={true} path={`${process.env.PUBLIC_URL}/IndexPayment`} component={TicketsListNone} />
      <Route path={`${process.env.PUBLIC_URL}/IndexPayment/TicketsList`} component={TicketsList} />
    </div>
    );
  }
}


export default IndexPayment;
