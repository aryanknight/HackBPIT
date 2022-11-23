import React from 'react'
import Diagnose from '../Components/Diagnose/Diagnose'
import Footer from '../Components/Footer/Footer'
import Intro, { Intro3 } from '../Components/Intro/Intro'
import HoverMenu from '../Components/Menu/HoverMenu/HoverMenu'
import Records from '../Components/Records/Records'
import '../index.css'

export default function RecordPage () {
  return (
    <div className="App">
        <HoverMenu/>
        <div className="circle-red"></div>
        <div className="circle-green"></div>
      <Intro3/>
      <Records/>
      <Footer/>
    </div>
  )
}
