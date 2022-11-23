import React from 'react';
import Smart from '../../Images/SmartMed.svg';
import Vector from '../../Images/Vector.png'; 
import Home from '../../Images/home.svg'
import './Intro.css'

export default function Intro() {
  return (
    <div className="intro-cont">
      <div className="container-medium">
        <div className="intro">
          <img src={Home} className="home-img" />
          <div className="intro-img-cont">
            <img src={Vector} className='intro-img-1' />
            <img src={Smart} className='intro-img-2' />
          </div>
          <div className="intro-cont-1">
            <div className='intro-text-cont'>
              <div className="intro-text-1">
                <span style={{fontWeight:'bold'}}>SmartMed</span> helps you
              </div>
              <div className="intro-text-2">
                Whenever and wherever needed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Intro2() {
  return (
    <div className="intro-cont">
      <div className="container-medium">
        <div className="intro">
          <img src={Home} className="home-img" />
          <div className="intro-img-cont">
            <img src={Vector} className='intro-img-1' />
            <img src={Smart} className='intro-img-2' />
          </div>
          <div className="intro-cont-1">
            <div className='intro-text-cont'>
              <div className="intro-text-1">
                diagnose with
                <span style={{fontWeight:'bold'}}> SmartMed</span>
              </div>
              <div className="intro-text-2">
                Whenever and wherever needed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
