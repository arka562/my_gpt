import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#Wtu">What is GPT</a></p>
    <p><a href="#possibility">OpenAI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
          <p className='logo'>MY GPT</p>
        </div>
      </div>
      <div className="navbar-links-container">
        <Menu />
      </div>
      <div className="navbar-links-signs">
        <button type='button'>Sign in</button>
        <button type='button' className='btn'>Sign up</button>
      </div>
      <div className="navbar-links-menu">
        {toggleMenu ? (
          <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-links-menu-container scale-up-center">
            <div className="navbar-links-menu-container">
              <Menu />
          
                 <button type='button'>Sign in</button>
                 <button type='button' className='btn'>Sign up</button>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
