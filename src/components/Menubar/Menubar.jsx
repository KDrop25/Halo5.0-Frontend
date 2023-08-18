import React from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';

const Menubar = () => {

return (
    <div className='menu-main'>
        <div className='menu-core'>
            <Link to="/home"><p className='navbar-home-text'>Home</p></Link>
            <Link to="/about"><p className='navbar-about-text'>About</p></Link>
            <Link to="/members"><p className='navbar-members-text'>Members</p></Link>
            <Link to="/schedule"><p className='navbar-schedule-text'>Schedule</p></Link>
            <Link to="/events"><p className='navbar-events-text'>Events</p></Link>
            <Link to="/gallery"><p className='navbar-contact-text'>Gallery</p></Link>
            <Link to="/contact"><p className='navbar-contact-text'>Contact</p></Link>
        </div>

    </div>
);
}

export default Menubar;
