import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Skill from '../components/Skill'
import Myresume from '../components/Myresume'
import top from "../images/top.png"

function HomePage() {
  return (
    <div>
      <Hero/>
      <About/>
      <Myresume/>
      <Projects/>
      <Skill/>
      <Contact/>
      <a href="#her">
      <img id="shakeImage" className='top' src={top} alt="" />
      </a>
<h1 className='by'>      Created By Umarxo'ja Mamarasulov |  2025 All rights reserved.</h1>
    </div>
  )
}

export default HomePage
