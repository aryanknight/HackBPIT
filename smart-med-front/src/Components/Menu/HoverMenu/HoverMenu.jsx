import React from 'react';
import './HoverMenu.css';
import { ReactComponent as Mitem1 } from '../../../Images/menuitem1.svg';
import { ReactComponent as Mitem2 } from '../../../Images/menuitem2.svg';
import { ReactComponent as Mitem3 } from '../../../Images/menuitem3.svg';
import { ReactComponent as Mitem4 } from '../../../Images/menuitem4.svg';
import { Link } from 'react-router-dom';

export default function HoverMenu() {
   
  return (
    <div className="hover-menu">
            <div className="hover-menu-cont">
                <Link to={'/'} target="_blank">
                    <Mitem4 className="hover-item" style={{width:'20px',height:'20px'}}/>
                </Link>
                <Link to={'/diagnose'} target="_blank">
                    <Mitem1 className="hover-item" style={{width:'20px',height:'20px'}}/>
                </Link>
                <a href="https://medium.com/@multipad.official" target="_blank">
                    <Mitem2 className="hover-item" style={{width:'20px',height:'20px'}}/>
                </a>
                <a href="https://medium.com/@multipad.official" target="_blank">
                    <Mitem3 className="hover-item" style={{width:'20px',height:'20px'}}/>
                </a>
            </div>   
        </div>
  )
}
