import React, { Component } from 'react';
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpened: false };
	}

	toggleState() {
		this.setState({ isOpened: !this.state.isOpened });
	}
// to={`${process.env.PUBLIC_URL}/page-path`}
	render() {
		console.log('isOpened', this.state.isOpened);
		let dropdownText;
			if (this.state.isOpened){
				dropdownText = <div className="Dropdown__list"> 
					<i class="fas fa-caret-up"></i>
					<ul>
						<li>
							<Link to={`${process.env.PUBLIC_URL}/Modal/Modalalldata`}>
								ВСІ
							</Link>
						</li>
						<li>
							<Link to={`${process.env.PUBLIC_URL}/Modal/Modalalldata/ModalOneData`}>
								12 КВІТНЯ 2018
							</Link>
						</li>
						<li>
							<Link to={`${process.env.PUBLIC_URL}/Modal/Modalalldata/ModalTwoData`}>
								13 КВІТНЯ 2018
							</Link>
						</li>
					</ul>
				</div>
			}
	return <div className="Dropdown" onClick={this.toggleState.bind(this)}>
		<span>
			ВКАЖІТЬ ДАТУ<i className="fas fa-caret-down"></i>
		</span>
		{dropdownText}
	</div>;
	}
}


export default Dropdown;
