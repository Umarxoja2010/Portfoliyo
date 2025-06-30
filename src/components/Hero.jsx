import React from 'react';
import "../styles/hero.css"
import animat from "../images/animat.png"
function Hero() {
  return (
    <div id="her" className="hero">
      <div className="container">
        <div className="hero_wrapper">
        <div className="hero_left">
          <h1>
            <span className=' h1spanhero'>Frontend</span><br />
            Developer
          </h1>
          <div>
          <span className='btnspanhero'>HTML</span>
          <span className='btnspanhero'>CSS</span>
          <span className='btnspanhero'>React</span>
          <span className='  btnspanhero'>JavaScript</span>
          </div>
          <div>
            <a href="#project">
          <button >Project</button>
            </a>
            <a href="#conta">
          <button>Contact</button>
            </a>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
        </div>
        <div className="hero_right">
        </div>
      </div>
      <div className="hero_right">
<img src={animat} alt="" />
      </div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
