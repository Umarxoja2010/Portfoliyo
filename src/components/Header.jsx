import React, { useRef, useEffect, useState } from 'react'
import "../styles/header.css"
import xbtn from "../images/btnclose.png"

function Header() {
  const modal = useRef()
  const yashir = useRef()
  const headerRef = useRef()

  const [scrolled, setScrolled] = useState(false)

  function openModal() {
    modal.current.classList.add("show")
  }

  function closeModal() {
    modal.current.classList.remove("show")
    yashir.current.classList.remove("show")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      id='head'
      className={`header ${scrolled ? 'scrolled' : ''}`}
      ref={headerRef}
    >
      <div className="container">
        
      <div ref={modal} className="modal">
        <div onClick={closeModal} className="clos">
          <img src={xbtn} alt="" />
        </div>
        <div className="modal_div">
          <a href="#head">
            <h3>Welcome</h3>
          </a>
        </div>
        <div className="modal_contant">
          <ul>
            <a href="#her">
              <li onClick={closeModal} ref={yashir}>Home</li>
            </a>
            <a href="#about">
              <li onClick={closeModal} ref={yashir}>About</li>
            </a>
            <a href="#project">
              <li onClick={closeModal} ref={yashir}>Projects</li>
            </a>
            <a href="#conta">
              <li onClick={closeModal} ref={yashir}>Contact</li>
            </a>
            <a onClick={closeModal} ref={yashir}  href="#resum"><li>Resume</li></a>

          </ul>
        </div>
      </div>
      <div className="header_wrapper">
        <div className="header_logo">
          <a href="#her">
            <h3>UM</h3>
          </a>
        </div>
        <div className="header_contant">
          <ul>
            <a href="#her"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#project"><li>Projects</li></a>
            <a href="#conta"><li>Contact</li></a>
            <a href="#resum"><li>Resume</li></a>
          </ul>
        </div>
        <div onClick={openModal} className="burger"><div className="line"></div><div className="line"></div><div className="line"></div></div>
      </div>
    </div>
    </div>
  )
}

export default Header
