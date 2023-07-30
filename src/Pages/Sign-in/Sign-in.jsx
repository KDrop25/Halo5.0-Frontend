import React from 'react';
import './Sign-in.css';
import discordlogo from '../../assets/icons8-discord.svg'
import youtubelogo from '../../assets/icons8-youtube.svg'
import githublogo from '../../assets/icons8-github.svg'
import twitterlogo from '../../assets/icons8-twitter.svg'
import instagramlogo from '../../assets/icons8-instagram.svg'
import googleloginlogo from '../../assets/icons8-google-login.png'
import discordloginlogo from '../../assets/icons8-discord-login.png'
import { useNavigate ,useLocation} from 'react-router-dom';
import { useRef,useState,useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
const LOGIN_URL = '/auth';

const Signin = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();

  const [email,setEmail] = useState('');
  const [pwd,setPwd] = useState('');
  const [errMsg,setErrMsg] = useState('');
  

  useEffect(()=> {
    userRef.current.focus();
  },[])
  
  useEffect(()=> {
    setErrMsg('');
  },[email,pwd])




  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({email,pwd}),
        {
          headers:{'Content-Type':'application/json'},
          withCredentials: true
        }
      );
      const AccessToken = response?.data?.accessToken;
      const user = response?.data?.username;
      const Roles = response?.data?.roles;
      
      setAuth({user,email,pwd,Roles,AccessToken});
      
      setEmail('');
      setPwd('');
      
      navigate(from,{replace:true})
      navigate("/home")

    }

    catch(err){

      if(!err?.response) {
        setErrMsg('No Server Response')

      }else if (err.response?.status===400){
        if (err.response.data && err.response.data.message){
          setErrMsg(err.response.data.message);
        }else{
          setErrMsg('Email & Password Cannot be Blank')
        }
      }else if (err.response?.status===401){
        if (err.response.data && err.response.data.message){
          setErrMsg(err.response.data.message);
        }else{
          setErrMsg('UnAuthorised')
        }
      }else{
        setErrMsg('Login Failed')
      }
      errRef.current.focus();
    }
    
    

  }
  return (
    
    
    <div className='signin-main'>
      <div class="signin-main-core">
        <div class="signin-container signin-b-container" id="b-container">
          <form class="signin-form" id="b-form" method="" action="" onSubmit={handleSubmit}>
            <div class="signin-switch__circle"></div>
            <div class="signin-switch__circle signin-switch__circle--t"></div>
            <h2 class="signin-form_title signin-title">Sign in to Website</h2>
            
            
            
            <span class="signin-form__span1">Our Socials:</span>

            <div class="signin-form__icons">
              <a href='https://discord.com'><img class="signin-form__icon" src={discordlogo} alt=""/></a>
              <a href='https://discord.com'><img class="signin-form__icon" src={youtubelogo} alt=""/></a>
              <a href='https://discord.com'><img class="signin-form__icon" src={githublogo} alt=""/></a>
              <a href='https://discord.com'><img class="signin-form__icon" src={twitterlogo} alt=""/></a>
              <a href='https://discord.com'><img class="signin-form__icon" src={instagramlogo} alt=""/></a>

            </div>
            
            <span class="signin-form__span">Sign up with email</span>


            <input 
            class="signin-form__input" 
            type="text" 
            id="email"
            ref = {userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            required 
            />
            
            <input 
            class="signin-form__input signin-password" 
            type="password" 
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            placeholder="Password" 
            required
            />
            
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            
            
            
            <button class="signin-form__button signin-button signin-submit">SIGN IN</button>
            
            <a href="Forgotpass" class="signin-form__link">Forgot your password?</a>

            <a href="Forgotpass" class="signin-form__login">Sign in using</a>

            <div class="signin-form__icons">
              <a href='https://discord.com'><img class="signin-form__icon" src={googleloginlogo} alt=""/></a>
              <a href='https://discord.com'><img class="signin-form__icon" src={discordloginlogo} alt=""/></a>
            </div>

          </form>
        </div>
        <div class="signin-switch" id="switch-cnt">

          <div class="signin-switch__circle"></div>
          <div class="signin-switch__circle signin-switch__circle--t"></div>

          <div class="signin-switch__container " id="switch-c2">
            <h2 class="signin-switch__title signin-title">Hello Friend !</h2>
            <p class="signin-switch__description signin-description">Enter your personal details and start journey with us</p>
            <button class="signin-switch__button signin-button signin-switch-btn" onClick={() => { navigate("/signup"); }}>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  )
    
}

export default Signin




























