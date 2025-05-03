import React, { useRef, useEffect, useState } from 'react'
import "../styles/header.css"
import burger from "../images/orgburger.png"
import xbtn from "../images/xbbtn.png"

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
      <div ref={modal} className="modal">
        <div onClick={closeModal} className="clos">
          <img src={xbtn} alt="" />
        </div>
        <div className="modal_div">
          <a href="#head">
            <h3>Welcome to my portfolio</h3>
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
            <a href="#projec">
              <li onClick={closeModal} ref={yashir}>Projects</li>
            </a>
            <a href="#conta">
              <li onClick={closeModal} ref={yashir}>Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="header_wrapper">
        <div className="header_logo">
          <a href="#head">
            <h3>Welcome to my portfolio</h3>
          </a>
        </div>
        <div className="header_contant">
          <ul>
            <a href="#her"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#projec"><li>Projects</li></a>
            <a href="#conta"><li>Contact</li></a>
          </ul>
        </div>
        <img onClick={openModal} className='burger' src={burger} alt="" />
      </div>
    </div>
  )
}

export default Header
