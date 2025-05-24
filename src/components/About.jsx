import React from 'react'
import "../styles/about.css"
import rasmim from "../images/rasmim.jpg"
function About() {
  return (
    <div className='about'>
      <div className="container">
        <h2 id='about'>About me</h2>
        <div className="about_wrapper">
            <div className="about_content">
                <h3><span>Hello, I'm</span> <br />
                Mamarasulov <br /> Umarxo'ja</h3>
                <p>I am a Frontend Developer with experience working with qualified people on various interesting projects (e-commerce, education) since 2024. My personal websites are built mainly with React JS, HTML, CSS (SCSS), JavaScript.
                </p>
                <div className="wiev_div">
                  <a href="#project">
<button>View projects</button>
                  </a>
                  <a href="https://drive.google.com/file/d/1HeUtG-ZUuzj-8flhhwAnAqDwoBQ7YquG/view?usp=drive_link">
<button>View CV</button>
                  </a>
                </div>
            </div>
         <div className="about_img">
          <img src={rasmim} alt="" />
         </div>
        </div>
      </div>
    </div>
  )
}

export default About
