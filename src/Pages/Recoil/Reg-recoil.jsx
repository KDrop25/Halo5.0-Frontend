import React, { useState, useRef } from 'react';
import './Reg-recoil.css';

import userlogo from '../../assets/icons8-male-user.png'
import { useNavigate } from 'react-router-dom';





const Regrecoil = () => {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };



  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const [Screen1, setScreen1] = useState(true);
  const [Screen2, setScreen2] = useState(false);
  const [Screen3, setScreen3] = useState(false);
  const navigate = useNavigate();
  const next1 = () => {
    setScreen1(false)
    setScreen2(true)
    setScreen3(false)

  };
  const next2 = () => {
    setScreen1(false)
    setScreen2(false)
    setScreen3(true)

  };
  const back2 = () => {
    setScreen1(false)
    setScreen2(true)
    setScreen3(false)

  };
  const back1 = () => {
    setScreen1(true)
    setScreen2(false)
    setScreen3(false)


  };


  return (
    <div className='regrecoil-main'>
      
      {Screen1 && (
        <div class="regrecoil-main-core">
          
          <div className='regrecoil-main-vertical'>
            <div className='regrecoil-heading'>
              <h1 className='regrecoil-heading-text'>RECOIL REGISTRATIONS</h1>
            </div>
            <div className='regrecoil-userimg-container'>
              <img className="regrecoil-userimg"src={userlogo}/>
            </div>
            <div className='regrecoil-input-fields'>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
            </div>
            <div className='regrecoil-button-container'>
              
              <button class="regrecoil-cssbuttons-io-button" onClick={next1}> NEXT
                <div class="regrecoil-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                </div>
              </button>
              
            </div>
          </div>
          
        </div>
      )}
      {Screen2 && (
        <div class="regrecoil-main-core">
        <div className='regrecoil-heading'>
          <h1 className='regrecoil-heading-text'>RECOIL REGISTRATIONS</h1>
          <h2 className='regrecoil-heading-text'>PAGE 2</h2>
        </div>
        <div className='regrecoil-userimg-container'>
          <img className="regrecoil-userimg"src={userlogo}/>
        </div>
        <div className='regrecoil-input-fields'>
          <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
          <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
          <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
          <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
        </div>
        <div className='regrecoil-button-container'>
          <button class="regrecoil-cssbuttons-io-button-back" onClick={back1}> BACK
            <div class="regrecoil-icon-back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
            </div>
          </button>
          <button class="regrecoil-cssbuttons-io-button" onClick={next2}> NEXT
            <div class="regrecoil-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
            </div>
          </button>
          
        </div>
        </div>
      )}
      {Screen3 && (
        <div class="regrecoil-main-core">
         
        <div className='regrecoil-heading'>
          <h1 className='regrecoil-heading-text'>RECOIL REGISTRATIONS</h1>
          
        </div>
        <div className='regrecoil-userimg-container'>
          <img className="regrecoil-userimg"src={userlogo}/>
        </div>
        <div className='regrecoil-input-fields'>
          <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
          <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
          <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
          <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
        </div>
        <div className='regrecoil-button-container'>
          <button class="regrecoil-cssbuttons-io-button-back" onClick={back2}> BACK
            <div class="regrecoil-icon-back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
            </div>
          </button>
          <button class="regrecoil-cssbuttons-io-button" onClick={next2}> SUBMIT
            <div class="regrecoil-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
            </div>
          </button>
          
        </div>
        </div>
      )}
      
      

        


      
    </div>
  )
}

export default Regrecoil































































