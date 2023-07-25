import React from 'react';
import './Events.css';

import recoilimg from '../../assets/recoil-img.png'
import quriousimg from '../../assets/qurious-img.png'
import encodeimg from '../../assets/encode-img.png'
import { Link } from 'react-router-dom';

const Events = () => {
    return (

        <div className='events-main'>
            <div className='events-heading'>
                <h1>Team Events</h1>

            </div>
            <div className='events-column'>

                <div className='events-row-container'>
                    <div className='events-row'>
                        <div className="events-event1" >
                            <div className='events-event1-ellipse'>
                                <img className="events-event1-ellipse-img" alt="" src={recoilimg} />
                            </div>
                            <p className="events-karan-agrawal">Recoil</p>
                            <Link to='/recoil'><button class="events-button" type='button'>Learn More</button></Link>
                        </div>

                    </div>
                    <div className='events-row'>
                        <div className="events-event1" >
                            <div className='events-event1-ellipse'>
                                <img className="events-event1-ellipse-img" alt="" src={quriousimg} />
                            </div>
                            <p className="events-karan-agrawal">Qurious</p>
                            <Link to='/qurious'><button class="events-button" type='button'>Learn More</button></Link>
                        </div>

                    </div>
                    <div className='events-row'>
                        <div className="events-event1" >
                            <div className='events-event1-ellipse'>
                                <img className="events-event1-ellipse-img" alt="" src={encodeimg} />
                            </div>
                            <p className="events-karan-agrawal">Encode</p>
                            <Link to='/encode'><button class="events-button" type='button'>Learn More</button></Link>
                        </div>

                    </div>
                </div>



            </div>
        </div>

    )
}

export default Events












