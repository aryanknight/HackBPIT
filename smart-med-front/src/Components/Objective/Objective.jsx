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
                <div className="objective-text-cont"><span style={{fontSize:'24px',color:'#0AC5A8',fontWeight:'bold'}}>Decentralized Health Platform</span> helps medical students to learn faster and better identification and diagnosis of diseases and ailments which are otherwise considered hard-to-diagnose. This can include anything from cancers which are tough to catch during the initial stages, to other genetic diseases.</div>
            </div>
          </div>
          <div className="objective-cont-1">
            <div className="objective-border">
                <div className="objective-text-cont"><span style={{fontSize:'24px',color:'#0AC5A8',fontWeight:'bold'}}>Electronic Health Records</span>  allow easier storage and accessing of medical records over the blockchain.</div>
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
                <div className="objective-text-cont"><span style={{fontSize:'24px',color:'#0AC5A8',fontWeight:'bold'}}>Save Data Over Blockchain</span>, doctors, hospital staff or even patients have the access to upload and retrieve their data from the blockchain </div>
            </div>
          </div>
          <div className="objective-cont-1">
            <div className="objective-border">
                <div className="objective-text-cont"><span style={{fontSize:'24px',color:'#0AC5A8',fontWeight:'bold'}}>Power of Blockchain</span> everyone would see the same data saved over the blockchain and updates would be visible to the whole network, therefore the doctors can be assured, that their learnings about their patients are accurate and upto date.</div>
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
