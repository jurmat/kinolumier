import React, { Component } from 'react';
import { connect } from 'react-redux'


import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';

class TicketsListNone extends Component {

  render() {
    return (
      <div className="TicketsListNone">
        <div className="tickets-admin">
          <div className="container">
            <div className="tickets-admin__title">
              переглянуті фільми
            </div>
            <div className="tickets-admin-none">
              На даний момент Ви ще не купляли квитки на нашому сайті.
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default TicketsListNone;
