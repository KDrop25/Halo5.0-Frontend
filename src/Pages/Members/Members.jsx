import React from 'react';
import './Members.css';
import userimg from '../../assets/user-img.jpg';
import {BsInstagram,BsFacebook,BsYoutube,BsTwitter,BsTwitch,BsGithub} from "react-icons/bs"



const Members = () => {
    return (
        <div className='members-main'>
            <div className='members-core'>
                <div className='members-heading'>
                    <h1 className='members-heading-text'>Team Members</h1>
                    <h2 className='members-heading-text'>lorem ipsum</h2>
                </div>
                <div className='members-cards-row'>
                    <div className='members-horizontal-card'>
                        <div className='members-horizontal-card-left'>
                            <img className="members-horizontal-card-userimage" alt="" src={userimg}/>
                            
                        </div>
                        <div className='members-horizontal-card-right'>
                            <h1 className='members-heading-text'>Team Members</h1>
                            <h2 className='members-heading-text'>lorem ipsum</h2>
                            <p>lorem ipsum.lorem ipsum.lorem ipsum.lorem ipsum. lorem ipsum.lorem ipsum.lorem ipsum.lorem ipsum.</p>
                            <div className='members-social-icons'>
                                    <a href="https://www.instagram.com/official.kxran/"><BsInstagram/></a>
                                    <a href=''><BsFacebook/></a>
                                    <BsYoutube/>
                                    <BsTwitter/>
                                    <BsGithub/>
                                    <BsTwitch/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='members-cards-row'>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={userimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Karan Agrawal</h1>
                            <h2 className='members-vertical-designation-text'>lorem ipsum</h2>
                            <h2 className='members-vertical-info-text'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <a href="https://www.instagram.com/official.kxran/"><BsInstagram/></a>
                                    <BsFacebook/>
                                    <BsYoutube/>
                                    <BsTwitter/>
                                    <BsGithub/>
                                    <BsTwitch/>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={userimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Karan Agrawal</h1>
                            <h2 className='members-vertical-designation-text'>lorem ipsum</h2>
                            <h2 className='members-vertical-info-text'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <BsInstagram/>
                                    <BsFacebook/>
                                    <BsYoutube/>
                                    <BsTwitter/>
                                    <BsGithub/>
                                    <BsTwitch/>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={userimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Karan Agrawal</h1>
                            <h2 className='members-vertical-designation-text'>lorem ipsum</h2>
                            <h2 className='members-vertical-info-text'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <BsInstagram/>
                                    <BsFacebook/>
                                    <BsYoutube/>
                                    <BsTwitter/>
                                    <BsGithub/>
                                    <BsTwitch/>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={userimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Karan Agrawal</h1>
                            <h2 className='members-vertical-designation-text'>lorem ipsum</h2>
                            <h2 className='members-vertical-info-text'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <BsInstagram/>
                                    <BsFacebook/>
                                    <BsYoutube/>
                                    <BsTwitter/>
                                    <BsGithub/>
                                    <BsTwitch/>
                        </div>
                    </div>
                </div>
                <div className='members-cards-row'>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={userimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Karan Agrawal</h1>
                            <h2 className='members-vertical-designation-text'>lorem ipsum</h2>
                            <h2 className='members-vertical-info-text'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <BsInstagram/>
                                    <BsFacebook/>
                                    <BsYoutube/>
                                    <BsTwitter/>
                                    <BsGithub/>
                                    <BsTwitch/>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={userimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Karan Agrawal</h1>
                            <h2 className='members-vertical-designation-text'>lorem ipsum</h2>
                            <h2 className='members-vertical-info-text'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <BsInstagram/>
                                    <BsFacebook/>
                                    <BsYoutube/>
                                    <BsTwitter/>
                                    <BsGithub/>
                                    <BsTwitch/>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={userimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Karan Agrawal</h1>
                            <h2 className='members-vertical-designation-text'>lorem ipsum</h2>
                            <h2 className='members-vertical-info-text'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <BsInstagram/>
                                    <BsFacebook/>
                                    <BsYoutube/>
                                    <BsTwitter/>
                                    <BsGithub/>
                                    <BsTwitch/>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={userimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Karan Agrawal</h1>
                            <h2 className='members-vertical-designation-text'>lorem ipsum</h2>
                            <h2 className='members-vertical-info-text'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <BsInstagram/>
                                    <BsFacebook/>
                                    <BsYoutube/>
                                    <BsTwitter/>
                                    <BsGithub/>
                                    <BsTwitch/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Members;
