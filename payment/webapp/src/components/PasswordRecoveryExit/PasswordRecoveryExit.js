import React, { Component } from 'react';

import Modalexit from '../Modal-exit/Modal-exit';
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class PasswordRecoveryExit extends Component {
 
	render() {
	    return (
	    	<div className="PasswordRecoveryExit">
			    	<div className="wrapper">
						<div className="Modaltop clearfix">
							<div className="title">
								ВІДНОВЛЕННЯ ПАРОЛЮ
							</div>
							<Modalexit />
						</div>
					</div>
					<div className="PasswordRecoveryFinish">
					<div className="wrapper">
						<div className="PasswordRecoveryFinish__title">
							Тепер ви можете заходити на сайт під новим паролем
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

export default PasswordRecoveryExit;