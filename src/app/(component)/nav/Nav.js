"use client"
import React, { useState } from 'react'
function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* <!-- header site --> */}
      <header>
        <div className="logo"><span>N</span>oman</div>

        <ul className={`navlist ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div
          id="menu-icon"
          className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}
          onClick={toggleMenu}
        ></div>
      </header>      
    </div>
  );
}

export default Page;
