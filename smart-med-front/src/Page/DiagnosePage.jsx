import React from 'react'
import Diagnose from '../Components/Diagnose/Diagnose'
import Footer from '../Components/Footer/Footer'
import Intro, { Intro2 } from '../Components/Intro/Intro'
import HoverMenu from '../Components/Menu/HoverMenu/HoverMenu'
import Objective from '../Components/Objective/Objective'
import '../index.css'

export default function DiagnosePage () {
  return (
    <div className="App">
        <HoverMenu/>
        <div className="circle-red"></div>
        <div className="circle-green"></div>
      <Intro2/>
      <Diagnose/>
      <Footer/>
    </div>
  )
}
