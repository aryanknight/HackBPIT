import React from 'react';
import TechImg from '../../Images/tech-img.svg';
import './Technology.css';

export default function Technology() {
  return (
    <div className="techno-cont">
      <div className="container-medium">
        <div className="techno">
          <div className="techno-head">
            Technologies Used
          </div>
          <div className="techno-img-cont">
            <img src={TechImg} alt="" className="techno-img" />
          </div>
        </div>
      </div>
    </div>
  )
}
