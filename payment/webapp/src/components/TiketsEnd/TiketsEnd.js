import React, { Component } from 'react';
import { connect } from 'react-redux'


import Modalexit from '../Modal-exit/Modal-exit';
import Modalinfo from '../Modal-info/Modal-info';
import Modalnext from '../Modal-next/Modal-next';
import Modaltop from '../Modal-top/Modal-top';
import TiketsForm from '../TiketsForm/TiketsForm';




import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';




class TiketsEnd extends Component {
  render() {
    return (
      <div className="TiketsEnd">
            <Modaltop />
            <Modalinfo />
           <div className="Hall">
	          <div className="Modaldate">
	            <div className="wrapper">
			<div className="Modaldate_container Modaldate_container-fin">
				<div className="title TiketsEnd__title">
					ВИ ВИБРАЛИ:
				</div>
				<div className="Hall__info">
				   <div className="Hall__time">
				    12, КВІТНЯ, 16:00, 2D
				   </div>
				  <Link to={`${process.env.PUBLIC_URL}/Modal/Modalalldata`} className="btn btn-black">
				    ВИБРАТИ ІНШИЙ СЕАНС
				   </Link>
				</div>
				<div className="Hall__info Hall__info-bottom">
				   <div className="Hall__time">
				    РЯД 5, МІСЦЕ 7, ЦІНА 80 ГРН
				   </div>
				  <Link to={`${process.env.PUBLIC_URL}/ModalHall`} className="btn btn-black">
				    ВИБРАТИ ІНШИЙ МІСЦЯ
				   </Link>
				</div>
			</div>
			</div>
			</div>
				<div className="wrapper">
					<div className="TiketsEnd__info">
					<div className="Hall__places">
	                ВИ ВИБРАЛИ:
	                <span> 1 МІСЦЕ </span>
	              </div>
	              <div className="Hall__sum">
	                СУМА:
	                <span> 80 ГРН </span>
	              </div>
              	<div className="title">
              		ВВЕДІТЬ ДАНІ ДЛЯ КУПІВЛІ
              	</div>
	              </div>
				</div>
			</div>

            <TiketsForm />
              
      </div>
    );
  }
}


export default TiketsEnd;