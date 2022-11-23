import React from 'react'
import Footer from '../Components/Footer/Footer'
import Intro from '../Components/Intro/Intro'
import HoverMenu from '../Components/Menu/HoverMenu/HoverMenu'
import Objective from '../Components/Objective/Objective'
import '../index.css'

export default function HomePage () {
  return (
    <div className="App">
        <HoverMenu/>
        <div className="circle-red"></div>
        <div className="circle-green"></div>
      <Intro/>
      <Objective/>
      <Footer/>
    </div>
  )
}
