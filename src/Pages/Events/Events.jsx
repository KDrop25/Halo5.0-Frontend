import React from 'react';
import './Events.css';

import recoilimg from '../../assets/recoil-img.png'
import quriousimg from '../../assets/qurious-img.png'
import encodeimg from '../../assets/encode-img.png'
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <div className='events-main'>
            <div className='events-core'>
                <div className='events-heading'>
                    <h1 className='events-heading-text'>Our Events</h1>
                </div>
                
                <div className='events-cards-row'>
                    <div className='events-vertical-card'>
                        <div className='events-vertical-card-top'>
                            <img className="events-vertical-card-userimage" alt="" src={recoilimg}/>
                        </div>
                        <div className='events-vertical-card-bottom'>
                            <h1 className='events-vertical-name-text'>Recoil</h1>
                            <h2 className='events-vertical-info-text'> lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='events-buttons'>
                            <Link to='/recoil'><button className="events-button" type='button'>Learn More</button></Link>
                        </div>
                    </div>
                    <div className='events-vertical-card'>
                        <div className='events-vertical-card-top'>
                            <img className="events-vertical-card-userimage" alt="" src={quriousimg}/>
                        </div>
                        <div className='events-vertical-card-bottom'>
                            <h1 className='events-vertical-name-text'>Qurious</h1>
                            <h2 className='events-vertical-info-text'> lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='events-buttons'>
                            <Link to='/qurious'><button className="events-button" type='button'>Learn More</button></Link>
                        </div>
                    </div>
                    <div className='events-vertical-card'>
                        <div className='events-vertical-card-top'>
                            <img className="events-vertical-card-userimage" alt="" src={encodeimg}/>
                        </div>
                        <div className='events-vertical-card-bottom'>
                            <h1 className='events-vertical-name-text'>Encode</h1>
                            <h2 className='events-vertical-info-text'> lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='events-buttons'>
                            <Link to='/encode'><button className="events-button" type='button'>Learn More</button></Link>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </div>
            
        </div>
        

    )
}

export default Events












