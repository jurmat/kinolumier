import React, { Component } from 'react';
import { connect } from 'react-redux'

import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';

import DropdownHeader from '../DropdownHeader/DropdownHeader';

class PaymentMenu extends Component {

  render() {
    return (
          <div className="PaymentMenu">
          <div className="row"> 
            <ul className="menu-left">
              <li>
                <a href='#'>
                  ГОЛОВНА
                </a>
              </li>
              <li>
                <a href='#'>
                  АФIША
                </a>
              </li>
              <li>
                <a href='#'>
                  АКЦІЇ
                </a>
              </li>
              <li>
                <a href='#'>
                  НОВИНИ
                </a>
              </li>
              <li>
                <a href='#'>
                  ВІДГУКИ
                </a>
              </li>
            </ul>
            <div className="logo-container">
              <div className="logo">

              </div>
            </div>
            <ul className="menu-right">
              <li>
                <a href='#'>
                  БАРИ ТА КАФЕ
                </a>
              </li>
              <li>
                <a href='#'>
                  КОНТАКТИ
                </a>
              </li>
            </ul>
            <DropdownHeader />   
          </div>
          </div>
    );
  }
}


export default PaymentMenu;
