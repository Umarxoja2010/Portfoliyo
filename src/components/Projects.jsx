import React from 'react'
import "../styles/project.css"

function Projects() {
  return (
    <div id='project' className='projects'>
      <div className="container">
        <h2>My Projects</h2>
        <div className="pro_wrapper">

          <a href="https://onlinezoocompleate.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="pro_card">
              <img
                src="https://i.postimg.cc/66LhFK26/zoo.png"
                srcSet="
                  https://i.postimg.cc/66LhFK26/zoo.png 600w,
                  https://i.postimg.cc/66LhFK26/zoo.png 300w
                "
                sizes="(max-width: 350px) 300px, 100vw"
                alt="Zoo Project"
                loading="lazy"
              />
            </div>
          </a>

          <a href="https://signycomplate.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="pro_card">
              <img
                src="https://i.postimg.cc/5th3WNSy/signy.png"
                srcSet="
                  https://i.postimg.cc/5th3WNSy/signy.png 600w,
                  https://i.postimg.cc/5th3WNSy/signy.png 300w
                "
                sizes="(max-width: 350px) 300px, 100vw"
                alt="Signy Project"
                loading="lazy"
              />
            </div>
          </a>

          <a href="https://gamepro-project.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="pro_card">
              <img
                src="https://i.postimg.cc/m232Qd55/gameer.png"
                srcSet="
                  https://i.postimg.cc/m232Qd55/gameer.png 600w,
                  https://i.postimg.cc/m232Qd55/gameer.png 300w
                "
                sizes="(max-width: 350px) 300px, 100vw"
                alt="Game Pro Project"
                loading="lazy"
              />
            </div>
          </a>

          <a href="https://backend2.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="pro_card">
              <img
                src="https://i.postimg.cc/5tsX8P6V/shop.png"
                srcSet="
                  https://i.postimg.cc/5tsX8P6V/shop.png 600w,
                  https://i.postimg.cc/5tsX8P6V/shop.png 300w
                "
                sizes="(max-width: 350px) 300px, 100vw"
                alt="Shop Project"
                loading="lazy"
              />
            </div>
          </a>

          <a href="https://globb.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="pro_card">
              <img
                src="https://i.postimg.cc/WpFn8ygS/glob.png"
                srcSet="
                  https://i.postimg.cc/WpFn8ygS/glob.png 600w,
                  https://i.postimg.cc/WpFn8ygS/glob.png 300w
                "
                sizes="(max-width: 350px) 300px, 100vw"
                alt="Globb Project"
                loading="lazy"
              />
            </div>
          </a>

          <a href="https://cofeeroasterr.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="pro_card">
              <img
                src="https://i.postimg.cc/Dw6gPPTT/cofee.png"
                srcSet="
                  https://i.postimg.cc/Dw6gPPTT/cofee.png 600w,
                  https://i.postimg.cc/Dw6gPPTT/cofee.png 300w
                "
                sizes="(max-width: 350px) 300px, 100vw"
                alt="Globb Project"
                loading="lazy"
              />
            </div>
          </a>

    
        </div>
      </div>
    </div>
  )
}

export default Projects
