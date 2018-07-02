import React, { Component } from 'react';
import Modalexit from '../Modal-exit/Modal-exit';


class Modaltop extends Component {
	render() {
		return (
			<div className="wrapper">
				<div className="Modaltop clearfix">
					<div className="title">
						КУПІВЛЯ БІЛЕТУ
					</div>
					<Modalexit />
				</div>
			</div>
		);
	}
}


export default Modaltop;
