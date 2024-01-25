import React from 'react';
import './Members.css';
import karanimg from '../../assets/members/WITHOUT SPECS.jpg';
import achalimg from '../../assets/members/achaljhawar.jpeg';
import ayushimg from '../../assets/members/ayushrai.jpeg';
import lavanyaimg from '../../assets/members/lavanya.jpeg';
import girimanimg from '../../assets/members/giriman.jpeg';
import dishaimg from '../../assets/members/dishagautam.jpeg';
import krishnaimg from '../../assets/members/krishnarora.jpeg';
import savitaimg from '../../assets/members/savitasaluja.jpg';
import userimg from '../../assets/icons8-male-user.png';
import {BsInstagram,BsFacebook,BsYoutube,BsTwitter,BsTwitch,BsGithub, BsLinkedin} from "react-icons/bs"



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
                            <img className="members-horizontal-card-userimage" alt="" src={savitaimg}/>
                            
                        </div>
                        <div className='members-horizontal-card-right'>
                            <h1 className='members-heading-text'>Ms.Savita Saluja</h1>
                            <h2 className='members-heading-text'>HOD Computer Science</h2>
                            <p>lorem ipsum.lorem ipsum.lorem ipsum.lorem ipsum. lorem ipsum.lorem ipsum.lorem ipsum.lorem ipsum.</p>
                        </div>
                    </div>
                </div>
                <div className='members-cards-row'>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={karanimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Karan Agrawal</h1>
                            <h2 className='members-vertical-designation-text'>Event Director</h2>
                            <h2 className='members-vertical-info-text'>Passionate Coder, Avid Gamer, and Tech Enthusiast | Embarking on a Journey of Innovation and Success</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <a href="https://www.linkedin.com/in/karan-agrawal-977746232/"><BsLinkedin/></a>
                                    <a href="https://www.instagram.com/official.kxran/"><BsInstagram/></a>
                                    <a href="https://twitter.com/karann__25"><BsTwitter/></a>
                                    <a href="https://github.com/KDrop25"><BsGithub/></a>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={achalimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Achal Jhawar</h1>
                            <h2 className='members-vertical-designation-text'>Event Coordinator</h2>
                            <h2 className='members-vertical-info-text'>A coding enthusiast embraced web development with geeky zeal.</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <a href="https://twitter.com/AchalJhawar"><BsTwitter/></a>
                                    <a href="https://www.linkedin.com/in/achal-jhawar/"><BsLinkedin/></a>
                        </div>
                    </div>
                    
                </div>
                <div className='members-cards-row'>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={lavanyaimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Lavanya Singh</h1>
                            <h2 className='members-vertical-designation-text'>Event Head - Qurious</h2>
                            <h2 className='members-vertical-info-text'>Bio student aspiring cardio surgeon, passionate about computers too.</h2>
                        </div>
                        <div className='members-social-icons'>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={userimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Prakruti Pavecha</h1>
                            <h2 className='members-vertical-designation-text'>Event Head - Encode</h2>
                            <h2 className='members-vertical-info-text'> </h2>
                        </div>
                        <div className='members-social-icons'>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={girimanimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Giriman Kohli</h1>
                            <h2 className='members-vertical-designation-text'>Event Head - Recoil</h2>
                            <h2 className='members-vertical-designation-text'>Head - Graphic Design</h2>
                            <h2 className='members-vertical-info-text'>Chasing dreams of engineering success, tackling competitive exams head-on.</h2>
                        </div>
                        <div className='members-social-icons'>
                            <a href="https://www.linkedin.com/in/giriman-kohli-5b8aba283/"><BsLinkedin/></a>
                        </div>
                    </div>
                    
                    
                </div>
                <div className='members-cards-row'>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={ayushimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Ayush Rai</h1>
                            <h2 className='members-vertical-designation-text'>Head - Video Editing</h2>
                            <h2 className='members-vertical-info-text'>every decision speaks the language of money</h2>
                        </div>
                        <div className='members-social-icons'>
                                    <a href="https://www.instagram.com/ayushrai14_/"><BsInstagram/></a>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={krishnaimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Kirshna Arora</h1>
                            <h2 className='members-vertical-designation-text'>Member - Qurious</h2>
                            <h2 className='members-vertical-designation-text'>Tech Support</h2>
                            <h2 className='members-vertical-info-text'>attitude isn't just a mindset; it's the source code of innovation.</h2>
                        </div>
                        <div className='members-social-icons'>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={dishaimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Disha Gautam</h1>
                            <h2 className='members-vertical-designation-text'>Member - Qurious</h2>
                            <h2 className='members-vertical-designation-text'>Content Head</h2>
                            <h2 className='members-vertical-info-text'> </h2>
                        </div>
                        <div className='members-social-icons'>
                        </div>
                    </div>
                    <div className='members-vertical-card'>
                        <div className='members-vertical-card-top'>
                            <img className="members-vertical-card-userimage" alt="" src={userimg}/>
                        </div>
                        <div className='members-vertical-card-bottom'>
                            <h1 className='members-vertical-name-text'>Aayush Gadhale</h1>
                            <h2 className='members-vertical-designation-text'>Video Editor</h2>
                            <h2 className='members-vertical-info-text'>Exceptional Video Animator and Editor, crafting visual narratives with precision and creativity.</h2>
                        </div>
                        <div className='members-social-icons'>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Members;
