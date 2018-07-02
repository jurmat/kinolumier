
import React, { Component } from 'react';
import{Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class DropdownHeader extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpened: false };
	}

	toggleState() {
		this.setState({ isOpened: !this.state.isOpened });
	}

	render() {
		console.log('isOpened', this.state.isOpened);
		let dropdownText;
			if (this.state.isOpened){
				dropdownText = <div className="Dropdown__list"> 
					<i className="fas fa-caret-up"></i>
					<ul className="DropdownHeader__item">
						<li >
							<Link  to={`${process.env.PUBLIC_URL}/IndexPayment`} className="Dropdown__icon icon-man">
								МІЙ КАБІНЕТ
							</Link>
						</li>
						<li>
							<Link to={`${process.env.PUBLIC_URL}/PersonalData`} className="Dropdown__icon icon-settings">
								НАЛАШТУВАННЯ
							</Link>
						</li>
						<li>
							<Link to={`${process.env.PUBLIC_URL}/Exit`} className="Dropdown__icon icon-go-out">
								ВИЙТИ
							</Link>
						</li>
					</ul>
				</div>
			}
	return <div className="DropdownHeader" onClick={this.toggleState.bind(this)}>
			<div className="profile_link"><span>ВОЛОДИМИР</span></div>
		{dropdownText}
	</div>;
	}
}


export default DropdownHeader;

