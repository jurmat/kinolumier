import React, { Component } from 'react';
import Modaldate from '../Modal-date/Modal-date';
import Modaltop from '../Modal-top/Modal-top';
import Modalinfo from '../Modal-info/Modal-info';
import Modalnext from '../Modal-next/Modal-next';

import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
class Modalsession extends Component {
	render() {
		return (
			<div>
			<Modaltop />
            <Modalinfo />
			<Modaldate />
			<div className="wrapper">

				<div className="Modalsession">
					<div className="Modalsession__title">
						ВИБЕРІТЬ СЕАНС
					</div>
					<div className="Modalsession__hours columns">
						<div className="column is-2">
							<div className="Modalsession__container">
								<div className="Modalsession__time">
									10:45
								</div>
								<div className="Modalsession__price">
									Від 80грн
								</div>
							</div>
						</div>
						<div className="column is-2">
							<div className="Modalsession__container">
								<div className="Modalsession__time">
									14:00
								</div>
								<div className="Modalsession__price">
									Від 80грн
								</div>
							</div>
						</div>
						<div className="column is-2">
							<div className="Modalsession__container Modalsession__container-black">
								<div className="Modalsession__time">
									16:00
								</div>
								<div className="Modalsession__price">
									Від 80грн
								</div>
								<div className="Modalsession__space">
									3D
								</div>
							</div>
						</div>
						<div className="column is-2">
							<div className="Modalsession__container Modalsession__container-black">
								<div className="Modalsession__time">
									18:00
								</div>
								<div className="Modalsession__price">
									Від 80грн
								</div>
							</div>
						</div>
						<div className="column is-2">
							<div className="Modalsession__container Modalsession__container-black">
								<div className="Modalsession__time">
									19:50
								</div>
								<div className="Modalsession__price">
									Від 80грн
								</div>
							</div>
						</div>
						<div className="column is-2">
							<div className="Modalsession__container Modalsession__container-black">
								<div className="Modalsession__time">
									21:00
								</div>
								<div className="Modalsession__price">
									Від 80грн
								</div>
								<div className="Modalsession__space">
									3D
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modalnext />
		</div>
		);
	}
}


export default Modalsession;
