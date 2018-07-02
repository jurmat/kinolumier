import React, { Component } from 'react';
import { connect } from 'react-redux'


import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';

class TicketsList extends Component {

  render() {
    return (
      <div className="TicketsList">
      <div className="tickets-admin">
        <div className="container">
          <div className="tickets-admin__title">
            Твої Квитки
          </div>
          <div className="tickets-admin columns">
            <div className="ticket column is-3">
              <div className="ticket__data">
                ВТ. 17.04.18
              </div>
              <div className="ticket__img">
               <img src="http://www.kinolumiere.com/img/poster_585822.jpg" />
              </div>
            <div className="ticket__action-container columns">
              <a className="ticket__action column is-6">
                <div className="icon-ticket icon-ticket-eye">
                </div>
                <div className="ticket__action-text">
                  ПЕРОЕГЛЯНУТИ БІЛЕТ
                </div>
              </a>
              <a className="ticket__action column is-6">
                <div className="icon-ticket icon-ticket-lien">
                </div>
                <div className="ticket__action-text">
                  ЗАВАНТАЖИТИ БІЛЕТ
                </div>
              </a>
            </div>
            </div>
            <div className="ticket column is-3">
              <div className="ticket__data">
                ВТ. 17.04.18
              </div>
              <div className="ticket__img">
               <img src="http://www.kinolumiere.com/img/poster_585822.jpg" />
              </div>
            <div className="ticket__action-container columns">
              <a className="ticket__action column is-6">
                <div className="icon-ticket icon-ticket-eye">
                </div>
                <div className="ticket__action-text">
                  ПЕРОЕГЛЯНУТИ БІЛЕТ
                </div>
              </a>
              <a className="ticket__action column is-6">
                <div className="icon-ticket icon-ticket-lien">
                </div>
                <div className="ticket__action-text">
                  ЗАВАНТАЖИТИ БІЛЕТ
                </div>
              </a>
            </div>
            </div>
            <div className="ticket column is-3">
              <div className="ticket__data">
                ВТ. 17.04.18
              </div>
              <div className="ticket__img">
               <img src="http://www.kinolumiere.com/img/poster_585822.jpg" />
              </div>
            <div className="ticket__action-container columns">
              <a className="ticket__action column is-6">
                <div className="icon-ticket icon-ticket-eye">
                </div>
                <div className="ticket__action-text">
                  ПЕРОЕГЛЯНУТИ БІЛЕТ
                </div>
              </a>
              <a className="ticket__action column is-6">
                <div className="icon-ticket icon-ticket-lien">
                </div>
                <div className="ticket__action-text">
                  ЗАВАНТАЖИТИ БІЛЕТ
                </div>
              </a>
            </div>
            </div>
            <div className="ticket column is-3">
              <div className="ticket__data">
                ВТ. 17.04.18
              </div>
              <div className="ticket__img">
               <img src="http://www.kinolumiere.com/img/poster_585822.jpg" />
              </div>
            <div className="ticket__action-container columns">
              <a className="ticket__action column is-6">
                <div className="icon-ticket icon-ticket-eye">
                </div>
                <div className="ticket__action-text">
                  ПЕРОЕГЛЯНУТИ БІЛЕТ
                </div>
              </a>
              <a className="ticket__action column is-6">
                <div className="icon-ticket icon-ticket-lien">
                </div>
                <div className="ticket__action-text">
                  ЗАВАНТАЖИТИ БІЛЕТ
                </div>
              </a>
            </div>
            </div>
          </div>
        </div>

      </div>
     </div>
    );
  }
}


export default TicketsList;
