import {useRef,useState,useEffect,React} from 'react';
import './Sign-up.css';
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
import axios from './api/axios';




const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
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
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2){
            setErrMsg("Invalid Entry")
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,JSON.stringify({user,pwd}),
            {
                headers: {'Content-Type':'applications/jason'},
                withCredentials: true
            }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            // clear input fields
        } catch (err) {
            if (!err?.response){
                setErrMsg('No Server Response');

            }else if (err.response?.status === 409){
                setErrMsg('Username Taken');
            } else{
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
  
  
  
    return (
        <>
        {success ? (
            <section>
                <h1>Logged In Successfully</h1>
                navigate('/signup')
            </section>
        ):(
    <div className='signup-main'>
        <div class="signup-main-core">
        <div class="signup-container signup-a-container" id="a-container">
            
            <form class="signup-form" id="a-form" method="" action="" onSubmit={handleSubmit}>
            <div class="signup-switch__circle"></div>
            <div class="signup-switch__circle signup-switch__circle--t"></div>
            <h2 class="signup-form_title signup-title">Create Account</h2>
            
            
            <div class="signup-form__icons">
                <a href=''><img class="signup-form__icon" src={discordlogo} /></a>
                <a href=''><img class="signup-form__icon" src={youtubelogo} /></a>
                <a href=''><img class="signup-form__icon" src={githublogo} /></a>
                <a href=''><img class="signup-form__icon" src={twitterlogo} /></a>
                <a href=''><img class="signup-form__icon" src={instagramlogo} /></a>
            </div>


            <span class="signup-form__span">or use email for registration</span>
            
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
                   
            
            <button class="signup-form__button signup-button signup-submit" disabled ={!validName || !validPwd || !validEmail ? true : false} onClick={() => { navigate("/signup2"); }}>
            SIGN UP
            </button>
            <a href="Forgotpass" class="signup-form__login">Sign in with</a>
            <div class="signup-form__icons">
              <a href='https://discord.com'><img class="signup-form__icon" src={googleloginlogo} alt=""/></a>
              <a href='https://discord.com'><img class="signup-form__icon" src={discordloginlogo} alt=""/></a>
              
              

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












