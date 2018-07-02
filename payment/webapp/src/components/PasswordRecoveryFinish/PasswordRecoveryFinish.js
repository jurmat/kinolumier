import React, { Component } from 'react';

import Modalexit from '../Modal-exit/Modal-exit';
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class PasswordRecoveryFinish extends Component {
 
	render() {
	    return (
	    	<div className="PasswordRecoveryFinish">
		    	<div className="wrapper">
					<div className="Modaltop clearfix">
						<div className="title">
							ВІДНОВЛЕННЯ ПАРОЛЮ
						</div>
					</div>
				</div>
				<div className="wrapper">
					<div className="PasswordRecoveryFinish__title">
						Лист з підтвердженням, щодо зміни паролю надіслано на вашу електронну адресу
					</div>
					<div className="Modalnext-container">
						<div className="Modalexit">
							<Link to={`${process.env.PUBLIC_URL}/PasswordRecoveryPassword`} className="btn btn-black" >
								ЗАКРИТИ
							</Link>
						</div>
					</div>
				</div>
			</div>
	    );
  	}
}

export default PasswordRecoveryFinish;