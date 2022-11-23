import React from 'react';
import Obj1 from '../../Images/obj-img-1.svg';
import Obj2 from '../../Images/obj-img-2.svg';
import Obj3 from '../../Images/obj-img-3.svg';
import Obj4 from '../../Images/obj-img-4.svg';
import './Objective.css';

export default function Objective() {
  return (
    <div className="objective-cont">
      <div className="container-medium">
        <div className="objective">
          <div className="objective-cont-1">
            <div className="objective-img-cont">
                <img src={Obj1} className="objevtive-img" />
            </div>
            <div className="objective-border">
                <div className="objective-text-cont"><span style={{fontSize:'24px',color:'#0AC5A8',fontWeight:'bold'}}>Decentralized Health Platform</span> to aid in managin patient reports and provide seamless healthcare whenever and wherever needed accross the globe.</div>
            </div>
          </div>
          <div className="objective-cont-1">
            <div className="objective-border">
                <div className="objective-text-cont"><span style={{fontSize:'24px',color:'#0AC5A8',fontWeight:'bold'}}>Decentralized Health Platform</span> to aid in managin patient reports and provide seamless healthcare whenever and wherever needed accross the globe.</div>
            </div>
            <div className="objective-img-cont">
                <img src={Obj2} className="objevtive-img" />
            </div>
          </div>
          <div className="objective-cont-1">
            <div className="objective-img-cont">
                <img src={Obj3} className="objevtive-img" />
            </div>
            <div className="objective-border">
                <div className="objective-text-cont"><span style={{fontSize:'24px',color:'#0AC5A8',fontWeight:'bold'}}>Decentralized Health Platform</span> to aid in managin patient reports and provide seamless healthcare whenever and wherever needed accross the globe.</div>
            </div>
          </div>
          <div className="objective-cont-1">
            <div className="objective-border">
                <div className="objective-text-cont"><span style={{fontSize:'24px',color:'#0AC5A8',fontWeight:'bold'}}>Decentralized Health Platform</span> to aid in managin patient reports and provide seamless healthcare whenever and wherever needed accross the globe.</div>
            </div>
            <div className="objective-img-cont">
                <img src={Obj4} className="objevtive-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
