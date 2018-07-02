import React, { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import {Link} from 'react-router-dom';
class Modaldate extends Component {
	render() {
		return (
			<div className="Modaldate">
				<div className="wrapper">
					<div className="Modaldate_container">
						<Link to={`${process.env.PUBLIC_URL}/Modal/Modalsession`} className="Modaldate__btn">
							НА ДОБУ
						</Link>
						<Link to={`${process.env.PUBLIC_URL}/Modal/Modalalldata`} className="Modaldate__btn btn-bg-none">
							НА ТИЖДЕНЬ
						</Link>
						<Dropdown />
					</div>
				</div>
			</div>
			
		);
	}
}


export default Modaldate;
