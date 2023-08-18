import './Sign-up.css';
import {useRef,useState,useEffect,React} from 'react';
import discordlogo from '../../assets/icons8-discord.svg'
import youtubelogo from '../../assets/icons8-youtube.svg'
import githublogo from '../../assets/icons8-github.svg'
import twitterlogo from '../../assets/icons8-twitter.svg'
import instagramlogo from '../../assets/icons8-instagram.svg'
import googleloginlogo from '../../assets/icons8-google-login.png'
import discordloginlogo from '../../assets/icons8-discord-login.png'
import { useNavigate } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';





const USER_REGEX = /^[A-z][A-z0-9-_]{3,10}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-z][A-z0-9-_](?=.*[@]).{2,32}$/;
const REGISTER_URL = '/register';




const Signup = () => {
    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        
    }, [pwd])
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
        
    }, [email])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd,email])
  
  
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email);
        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd ,email}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username/Email Already Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
    
  
  
    return (
        <>
        {success ? (
            <div className='signup-success-main'>
                <div class="signup-success-main-core">
                
                    <div class="signup-success-switch" id="switch-cnt">
            
                        <div class="signup-success-switch__circle"></div>
                        <div class="signup-success-switch__circle signup-success-switch__circle--t"></div>
            
                        <div class="signup-success-switch__container " id="switch-c2">
                        <h2 class="signup-success-switch__title signup-success-title">Welcome!</h2>
                        <p class="signup-success-switch__description signup-success-description">Feel free to persistently log in to your account.</p>
                        <button class="signup-success-switch__button signup-success-button signup-success-switch-btn" onClick={() => { navigate("/signin"); }}>SIGN IN</button>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            <div className='signup-main'>
                <div class="signup-main-core">
                    <div class="signup-container signup-a-container" id="a-container">
                        
                        <form class="signup-form" id="a-form" method="" action="" onSubmit={handleSubmit}>
                        <div class="signup-switch__circle"></div>
                        <div class="signup-switch__circle signup-switch__circle--t"></div>
                        <h2 class="signup-form_title signup-title">Create Account</h2>
                        
                        <span class="signup-form__span1">Our Socials</span>
                        <div class="signup-form__icons">
                            <a href='g'><img class="signup-form__icon" src={discordlogo} alt=''/></a>
                            <a href='g'><img class="signup-form__icon" src={youtubelogo} alt=''/></a>
                            <a href='g'><img class="signup-form__icon" src={githublogo} alt=''/></a>
                            <a href='g'><img class="signup-form__icon" src={twitterlogo} alt=''/></a>
                            <a href='g'><img class="signup-form__icon" src={instagramlogo} alt=''/></a>
                        </div>


                        <span class="signup-form__span">Sign up with email</span>
                        
                        <span>
                        <input class="signup-form__input" type="text" placeholder="Name" id="username" ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} required aria-invalid={validName ? "false" : "true"} aria-describedby="uidnote" onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)}/> 
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </span>
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        
                        
                        
                        
                        <span>
                        <input class="signup-form__input" type="text" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} required aria-invalid={validEmail ? "false" : "true"} aria-describedby="emailnote" onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)}/>
                        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </span>
                        <p id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        
                        
                        
                        
                        <span>
                        <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        class="signup-form__input"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        />
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </span>
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase letters,<br/>
                            a number and a special character.<br />
                            Allowed special characters: !@#$%^&*
                            
                        </p>
                        







                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            
                        
                        
                        <button class="cssbuttons-io-button" disabled ={!validName || !validPwd || !validEmail ? true : false}> SIGN UP
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                            </div>
                        </button>
                        <a href="Forgotpass" class="signup-form__login">Sign up using</a>
                        <div class="signup-form__icons">
                        <img class="signup-form__icon" src={googleloginlogo} alt="" />
                        <img class="signup-form__icon" src={discordloginlogo} alt=""/>
                        
                        

                        </div>
                        

                        </form>
                    </div>

                    <div class="signup-switch" id="switch-cnt">
                        <div class="signup-switch__circle"></div>
                        <div class="signup-switch__circle signup-switch__circle--t"></div>
                        <div class="signup-switch__container" id="switch-c1">
                            <h2 class="signup-switch__title signup-title">Welcome Back !</h2>
                            <p class="signup-switch__description signup-description">To keep connected with us please login with your personal info</p>
                            <button class="signup-switch__button signup-button signup-switch-btn" onClick={() => { navigate("/signin"); }}>SIGN IN</button>
                        </div>
                    </div>
                
                </div>
            </div>
        )}
        </>
    )
    }

export default Signup












