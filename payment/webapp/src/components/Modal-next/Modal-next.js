import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Modalnext extends Component {
	render() {
		return (
			<div className="Modalnext-container">
				<Link to={`${process.env.PUBLIC_URL}/ModalHall`} className="Modalnext" >
					ДАЛІ
				</Link>
			</div>
			
		);
	}
}


export default Modalnext;
