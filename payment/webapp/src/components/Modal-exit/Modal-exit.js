import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Modalexit extends Component {
	render() {
		return (
			<div className="Modalexit">
				<Link to={`${process.env.PUBLIC_URL}/Exit`} className="btn btn-black" >
					ЗАКРИТИ
				</Link>
			</div>
		);
	}
}


export default Modalexit;
