import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import halologo from '../../assets/Halolegion logo Trans 500by500.png'
import { Link } from 'react-router-dom';


const Menu = () => (<>
  <Link to="/home"><p className='navbar-home-text'>Home</p></Link>
  <Link to="/about"><p className='navbar-about-text'>About</p></Link>
  <Link to="/members"><p className='navbar-members-text'>Members</p></Link>
  <Link to="/schedule"><p className='navbar-schedule-text'>Schedule</p></Link>
  <Link to="/events"><p className='navbar-events-text'>Events</p></Link>
  <Link to="/gallery"><p className='navbar-contact-text'>Gallery</p></Link>
  <Link to="/contact"><p className='navbar-contact-text'>Contact</p></Link>

</>)



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (

    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="navbar-links_logo">
          <a href="home"><p className='navbar-halo-logo'><img class="navbar-logo-image" alt='logo' src={halologo} /></p></a>
          <p className='navbar-halo-text'><a href='home'>Halolegion</a></p>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />

        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <Link to="/signin"><p className='navbar-signin-text' >Sign in</p></Link>
        <Link to="/signup"><button className='navbar-signup-text' type='button'>Sign Up</button></Link>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-link-sign'>
                <Link to="/signin"><p className='navbar-signin-text' >Sign in</p></Link>
                <Link to="/signup"><button className='navbar-signup-text' type='button'>Sign Up</button></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar