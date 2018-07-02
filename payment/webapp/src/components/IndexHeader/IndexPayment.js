import React, { Component } from 'react';
import { connect } from 'react-redux'

import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';

import DropdownHeader from '../DropdownHeader/DropdownHeader';
import PaymentMenu from '../PaymentMenu/PaymentMenu';


class IndexHeader extends Component {

  render() {
    return (
      <div className="IndexHeader">
        <div className="container">
          <PaymentMenu />
          <div className="user">
             <div className="user__name">
                Володимир Чопик
              </div>
              <div className="user__email">
                <span>
                  EMAIL
                </span>
                  vvchoyk@gmail.com
              </div>
          </div>
        </div>
      </div>
    );
  }
}


export default IndexHeader;
