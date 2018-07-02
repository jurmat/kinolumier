import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';


class ModalOneData extends Component {
	render() {
		return (
			<div className="ModalOneData">
				<div className="wrapper">
				<div className="Modalsession">
					<div className="Modalsession__title-2">
						12 КВІТНЯ ЧТ
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
		</div>

		);
	}
}


export default ModalOneData;
