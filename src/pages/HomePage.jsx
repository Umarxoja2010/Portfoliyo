import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Skill from '../components/Skill'
import Myresume from '../components/Myresume'

function HomePage() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Skill/>
      <Myresume/>
      <Contact/>
<h1 className='by'>      Created By Umarxo'ja Mamarasulov |  2025 All rights reserved.</h1>
    </div>
  )
}

export default HomePage
