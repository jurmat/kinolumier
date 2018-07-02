
import React, { Component } from 'react';
import Modaldate from '../Modal-date/Modal-date';
import Modaltop from '../Modal-top/Modal-top';
import ModalOneData from '../ModalOneData/ModalOneData';
import ModalTwoData from '../ModalTwoData/ModalTwoData';
import Modalinfo from '../Modal-info/Modal-info';
import Modalnext from '../Modal-next/Modal-next';

import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Modalalldata extends Component {
	render() {
		return (
			<div className="Modalalldata">
				<Modaltop />
				<Modalinfo />
				<Modaldate />
				<div className="wrapper">
				<div className="Modalsession">
					<div className="Modalsession__title">
						ВИБЕРІТЬ СЕАНС
					</div>
					 <Route exact={true} path={`${process.env.PUBLIC_URL}/Modal/Modalalldata`} component={ModalOneData} />
					 <Route path={`${process.env.PUBLIC_URL}/Modal/Modalalldata/ModalOneData`} component={ModalOneData} />
				</div>
			</div>
			<div className="wrapper">
				<div className="Modalsession">
					<Route exact={true} path={`${process.env.PUBLIC_URL}/Modal/Modalalldata`} component={ModalTwoData} />
					<Route path={`${process.env.PUBLIC_URL}/Modal/Modalalldata/ModalTwoData`} component={ModalTwoData} />
				</div>
			</div>
			<Modalnext />
		</div>

		);
	}
}


export default Modalalldata;
