import React, { useState ,useEffect} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import halologo from '../../assets/Halolegion logo Trans 500by500.png'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import useLogout from '../../hooks/useLogout';
import {ROLES} from '../../App'



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
  const {auth} = useAuth();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hasAdminRole,setHasAdminroles] = useState(false);
  

  useEffect(() => {
    if (auth.roles !== undefined || auth.Roles !== undefined) {
      
      const authRoles = JSON.stringify(auth.roles || auth.Roles);
    
      if (authRoles.includes(ROLES.Admin)) {
        setHasAdminroles(true);
      } else {
        setHasAdminroles(false);
      }
    } else {
      
      setHasAdminroles(false);
    }
  }, [auth.roles, auth.Roles]);
  

  


  const logout = useLogout();

  const handleLogout = async (e) => {
    await logout();
  }
    
  

    
  

  return (

  
  
  <div className='navbar'>
    <div className='navbar-core'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <a href="home"><p className='navbar-halo-logo'><img class="navbar-logo-image" alt='logo' src={halologo} /></p></a>
          <a href='home'><p className='navbar-halo-text'>Halolegion</p></a>
        </div>
        <div className="navbar-links_container">
          <Menu />

        </div>
      </div>
      <div className='navbar-actions'>
        <div className={`navbar-sign ${auth.accessToken? 'hidden':''}`}>
          <Link to="/signin"><p className='navbar-signin-text' >Sign in</p></Link>
          <Link to="/signup"><button className='navbar-signup-text' type='button'>Sign Up</button></Link>
        </div>
        <div className={`navbar-sign ${auth.accessToken? '':'hidden'}`}>
        <Link to={'/home'}><button className='navbar-signup-text' type='button' onClick={handleLogout}>Sign Out</button></Link>
        <Link to={hasAdminRole ? '/dashboard' : '/profile'}><img className='navbar-user-profile-logo' alt='profilelogo'src={halologo}/></Link>
          
            
        </div>
        <div className='navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }

          {toggleMenu && (
              <div className='navbar-menu_container scale-up-center'>
                <div className='navbar-menu_container-links'>
                  <Menu />
                  {!auth.accessToken && (
                    <div className='navbar-menu_container-link-sign'>
                      <Link to="/signin"><p className='navbar-signin-text' >Sign in</p></Link>
                      <Link to="/signup"><button className='navbar-signup-text' type='button'>Sign Up</button></Link>
                    </div>
                  )}

                  {/* If the user is signed in, show the Sign Out button and user profile logo in the mobile menu */}
                  {auth.accessToken && (
                    <div className='navbar-menu_container-link-sign'>
                      <Link to={'/home'}><button className='navbar-signup-text' type='button' onClick={handleLogout}>Sign Out</button></Link>
                      <Link to={hasAdminRole ? '/dashboard' : '/profile'}><img className='navbar-user-profile-logo' alt='profilelogo'src={halologo}/></Link>
                    </div>
                  )}
                  
                  
                </div>
              </div>
          )}
        </div>
      </div>
    </div>
  </div>
)

    
        
}

export default Navbar