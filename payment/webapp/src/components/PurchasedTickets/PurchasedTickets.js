import React, { Component } from 'react';

import Modalexit from '../Modal-exit/Modal-exit';
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class PurchasedTickets extends Component {
 
	render() {
	    return (
	    	<div className="PurchasedTickets">
			    	<div className="wrapper">
						<div className="Modaltop clearfix">
							<div className="title">
								ВІТАЄМО
							</div>
							<Modalexit />
						</div>
					</div>
					<div className="PasswordRecoveryFinish">
					<div className="wrapper">
						<div className="PasswordRecoveryFinish__title">
							Тепер Ви можете переглянути детальну інформацію про придбанні квитки в особистому кабінеті
						</div>
						<div className="Modalnext-container">
							<Link to={`${process.env.PUBLIC_URL}/Modal/Modalsession`} className="btn btn-black" >
									ПРОдовжити купівлю
							</Link>
						</div>
						<div className="Modalnext-container">
							<Link to={`${process.env.PUBLIC_URL}/IndexPayment`} className="btn btn-black btn-gray" >
								МІЙ ПРОФІЛЬ
							</Link>
						</div>
					</div>
				</div>
			</div>
	    );
  	}
}

export default PurchasedTickets;