import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chairs from '../chairs/chairs';
import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';


const chairsList =[

  { 
    name: '1',
    posX: '20px',
    posY: '10',
    col: '#4a423d',
    id: '1.1'
   },
  {
    name: '2',
    posX: '46px',
    posY: '10',
    col: '#4a423d',
    id: '1.2'
 },
  {
    name: '3',
    posX: '72px',
    posY: '10',
    col: '#4a423d',
    id: '1.3'
   },
  {
    name: '4',
    posX: '97px',
    posY: '10',
    col: '#4a423d',
    id: '1.4'
   },
  { 
    name: '5',
    posX: '123px',
    posY: '10',
    col: '#4a423d',
    id: '1.5'
  },
  {
    name: '6',
    posX: '199px',
    posY: '10',
    col: '#4a423d',
    id: '1.6'
 },
  {
    name: '7',
    posX: '225px',
    posY: '10',
    col: '#4a423d',
    id: '1.7'
   },
  {
    name: '8',
    posX: '251px',
    posY: '10',
    col: '#4a423d',
    id: '1.8'
   },
  { 
    name: '9',
    posX: '277px',
    posY: '10',
    col: '#4a423d',
    id: '1.9'
  },
  { 
    name: '10',
    posX: '303px',
    posY: '10',
    col: '#4a423d',
    id: '1.10'
  },
  { 
    name: '11',
    posX: '329px',
    posY: '10',
    col: '#4a423d',
    id: '1.11'
  },
  { 
    name: '12',
    posX: '355px',
    posY: '10',
    col: '#4a423d',
    id: '1.12'
  },





  { 
    name: '1',
    posX: '20px',
    posY: '33px',
    col: '#4a423d',
    id: '2.1'
   },
  {
    name: '2',
    posX: '46px',
    posY: '33px',
    col: '#4a423d',
    id: '2.2'
 },
  {
    name: '3',
    posX: '72px',
    posY: '33px',
    col: '#4a423d',
    id: '2.3'
   },
  {
    name: '4',
    posX: '97px',
    posY: '33px',
    col: '#4a423d',
    id: '2.4'
   },
  { 
    name: '5',
    posX: '123px',
    posY: '33px',
    col: '#4a423d',
    id: '2.5'
  },
  {
    name: '6',
    posX: '199px',
    posY: '33px',
    col: '#4a423d',
    id: '2.6'
 },
  {
    name: '7',
    posX: '225px',
    posY: '33px',
    col: '#4a423d',
    id: '2.7'
   },
  {
    name: '8',
    posX: '251px',
    posY: '33px',
    col: '#4a423d',
    id: '2.8'
   },
  { 
    name: '9',
    posX: '277px',
    posY: '33px',
    col: '#4a423d',
    id: '2.9'
  },
  { 
    name: '10',
    posX: '303px',
    posY: '33px',
    col: '#4a423d',
    id: '2.10'
  },
  { 
    name: '11',
    posX: '329px',
    posY: '33px',
    col: '#4a423d',
    id: '2.11'
  },
  { 
    name: '12',
    posX: '355px',
    posY: '33px',
    col: '#4a423d',
    id: '2.12'
  },




  {
    name: '1',
    posX: '46px',
    posY: '66px',
    col: '#4a423d',
    id: '3.1'
 },
  {
    name: '2',
    posX: '72px',
    posY: '66px',
    col: '#4a423d',
    id: '3.2'
   },
  {
    name: '3',
    posX: '97px',
    posY: '66px',
    col: '#4a423d',
    id: '3.3'
   },
  { 
    name: '4',
    posX: '123px',
    posY: '66px',
    col: '#4a423d',
    id: '3.4'
  },
  {
    name: '5',
    posX: '199px',
    posY: '66px',
    col: '#4a423d',
    id: '3.5'
 },
  {
    name: '6',
    posX: '225px',
    posY: '66px',
    col: '#4a423d',
    id: '3.6'
   },
  {
    name: '7',
    posX: '251px',
    posY: '66px',
    col: '#4a423d',
    id: '3.7'
   },
  { 
    name: '8',
    posX: '277px',
    posY: '66px',
    col: '#4a423d',
    id: '3.8'
  },
  { 
    name: '9',
    posX: '303px',
    posY: '66px',
    col: '#4a423d',
    id: '3.9'
  },
  { 
    name: '10',
    posX: '329px',
    posY: '66px',
    col: '#4a423d',
    id: '3.10'
  },
  {
    name: '1',
    posX: '199px',
    posY: '99px',
    col: '#4a423d',
    id: '4.1'
 },
  {
    name: '2',
    posX: '225px',
    posY: '99px',
    col: '#4a423d',
    id: '4.2'
   },
  {
    name: '3',
    posX: '251px',
    posY: '99px',
    col: '#4a423d',
    id: '4.3'
   },
  { 
    name: '4',
    posX: '277px',
    posY: '99px',
    col: '#4a423d',
    id: '4.4'
  },
  { 
    name: '5',
    posX: '303px',
    posY: '99px',
    col: '#4a423d',
    id: '4.5'
  },
  { 
    name: '6',
    posX: '329px',
    posY: '99px',
    col: '#4a423d',
    id: '4.6'
  },




    {
    name: '1',
    posX: '186px',
    posY: '132px',
    col: '#4a423d',
    id: '5.1'
 },
  {
    name: '2',
    posX: '212px',
    posY: '132px',
    col: '#4a423d',
    id: '5.2'
   },
  {
    name: '3',
    posX: '238px',
    posY: '132px',
    col: '#4a423d',
    id: '5.3'
   },
  { 
    name: '4',
    posX: '264px',
    posY: '132px',
    col: '#4a423d',
    id: '5.4'
  },
  { 
    name: '5',
    posX: '290px',
    posY: '132px',
    col: '#4a423d',
    id: '5.5'
  },
  { 
    name: '6',
    posX: '316px',
    posY: '132px',
    col: '#4a423d',
    id: '5.6'
  },
  { 
    name: '7',
    posX: '342px',
    posY: '132px',
    col: '#4a423d',
    id: '5.7'
  },



  {
    name: '1',
    posX: '186px',
    posY: '165px',
    col: '#4a423d',
    id: '6.1'
 },
  {
    name: '2',
    posX: '212px',
    posY: '165px',
    col: '#4a423d',
    id: '6.2'
   },
  {
    name: '3',
    posX: '238px',
    posY: '165px',
    col: '#4a423d',
    id: '6.3'
   },
  { 
    name: '4',
    posX: '264px',
    posY: '165px',
    col: '#4a423d',
    id: '6.4'
  },
  { 
    name: '5',
    posX: '290px',
    posY: '165px',
    col: '#4a423d',
    id: '6.5'
  },
  { 
    name: '6',
    posX: '316px',
    posY: '165px',
    col: '#4a423d',
    id: '6.6'
  },
  { 
    name: '7',
    posX: '342px',
    posY: '165px',
    col: '#4a423d',
    id: '6.7'
  },




  {
    name: '1',
    posX: '186px',
    posY: '198px',
    col: '#4a423d',
    id: '7.1'
 },
  {
    name: '2',
    posX: '212px',
    posY: '198px',
    col: '#4a423d',
    id: '7.2'
   },
  {
    name: '3',
    posX: '238px',
    posY: '198px',
    col: '#4a423d',
    id: '7.3'
   },
  { 
    name: '4',
    posX: '264px',
    posY: '198px',
    col: '#4a423d',
    id: '7.4'
  },
  { 
    name: '5',
    posX: '290px',
    posY: '198px',
    col: '#4a423d',
    id: '7.5'
  },
  { 
    name: '6',
    posX: '316px',
    posY: '198px',
    col: '#4a423d',
    id: '7.6'
  },
  { 
    name: '7',
    posX: '342px',
    posY: '198px',
    col: '#4a423d',
    id: '7.7'
  },




  {
    name: '1',
    posX: '186px',
    posY: '231px',
    col: '#4a423d',
    id: '8.1'
 },
  {
    name: '2',
    posX: '212px',
    posY: '231px',
    col: '#4a423d',
    id: '8.2'
   },
  {
    name: '3',
    posX: '238px',
    posY: '231px',
    col: '#4a423d',
    id: '8.3'
   },
  { 
    name: '4',
    posX: '264px',
    posY: '231px',
    col: '#4a423d',
    id: '8.4'
  },
  { 
    name: '5',
    posX: '290px',
    posY: '231px',
    col: '#4a423d',
    id: '8.5'
  },
  { 
    name: '6',
    posX: '316px',
    posY: '231px',
    col: '#4a423d',
    id: '8.6'
  },
  { 
    name: '7',
    posX: '342px',
    posY: '231px',
    col: '#4a423d',
    id: '8.7'
  },
  { 
    name: '8',
    posX: '368px',
    posY: '231px',
    col: '#4a423d',
    id: '8.8'
  },




  {
    name: '1',
    posX: '212px',
    posY: '264px',
    col: '#4a423d',
    id: '9.1'
   },
  {
    name: '2',
    posX: '238px',
    posY: '264px',
    col: '#4a423d',
    id: '9.2'
   },
  { 
    name: '3',
    posX: '264px',
    posY: '264px',
    col: '#4a423d',
    id: '9.3'
  },
  { 
    name: '4',
    posX: '290px',
    posY: '264px',
    col: '#4a423d',
    id: '9.4'
  },
  { 
    name: '5',
    posX: '316px',
    posY: '264px',
    col: '#4a423d',
    id: '9.5'
  },
  { 
    name: '6',
    posX: '342px',
    posY: '264px',
    col: '#4a423d',
    id: '9.6'
  },
  { 
    name: '7',
    posX: '368px',
    posY: '264px',
    col: '#4a423d',
    id: '9.7'
  },




];


class Hall extends Component {

  render() {
   

    return (
      
        <div className="Hall">
          <div className="Modaldate">
            <div className="wrapper">
              <div className="Modaldate_container">
                <div className="title">
                  ВИ ВИБРАЛИ:
                </div>
                <div className="Hall__info">
                   <div className="Hall__time">
                    12, КВІТНЯ, 16:00, 2D
                   </div>
                  <Link to={`${process.env.PUBLIC_URL}/Modal/Modalalldata`} className="Modalnext" >
                    ВИБРАТИ ІНШИЙ СЕАНС
                   </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper wrap-border">
           <div className="Hall__name">
            ЗАЛ: <span>АГАТОВИЙ</span>
           </div>
           <div className="Hall__title">
              ВИБІР МІСЦЯ
            </div>
            <div className="screen">
              <span> Екран </span>
            </div>
            <div className="Hall__emerald">
              {chairsList.map((item) =>
                <Chairs chair={item} /> 
              )}
            </div>
          </div>
          <div className="wrapper">
            <div className="Hall__bottom">
              <div className="Hall__places">
                ВИ ВИБРАЛИ:
                <span> 1 МІСЦЕ </span>
              </div>
              <div className="Hall__sum">
                СУМА:
                <span> 80 ГРН </span>
              </div>
                <div className="Modalnext-container">
                  <Link to={`${process.env.PUBLIC_URL}/TiketsEnd`} className="Modalnext"  >
                  ДАЛІ
                  </Link>
                </div>
             </div>
           </div>
        </div>
    );
  }
}


export default Hall;
