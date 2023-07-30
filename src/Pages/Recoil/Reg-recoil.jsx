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
      <div class="regrecoil-main-core">
        {Screen1 && (
          <div class="regrecoil-container regrecoil-b-container regrecoil-is-gx1" id="b-container">

            <form class="regrecoil-form" id="b-form" method="" action="" onSubmit={next1}>

              <h2 class="regrecoil-form_title regrecoil-title">Recoil Registrations</h2>
              <span class="regrecoil-form__span">or use your email account</span>

              <div className='regrecoil-ellipse' onClick={handleClick} style={{ cursor: "pointer" }}>
                {image ? (<img src={URL.createObjectURL(image)} alt="" className="regrecoil-ellipse-img" />) : (<img src={userlogo} alt="" className="regrecoil-ellipse-img" />)}
                <input id="image-upload-input" type="file" onChange={handleImageChange} ref={hiddenFileInput} style={{ display: "none" }} />


              </div>

              <input class="regrecoil-form__input" id='first_name' type="text" placeholder="First Name" required/>
              <input class="regrecoil-form__input" id='last_name' type="text" placeholder="Last Name" required/>
              <input class="regrecoil-form__input" id='user_email' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Phone" required/>

              <button class="regrecoil-form__button regrecoil-button regrecoil-submit" >NEXT</button>
            </form>
            <div class="regrecoil-switch__circle"></div>
            <div class="regrecoil-switch__circle regrecoil-switch__circle--t"></div>
          </div>
        )}


        {Screen2 && (
          <div class="regrecoil-container2 regrecoil-b-container2 regrecoil-is-gx2" id="b-container">

            <form class="regrecoil-form" id="b-form" method="" action="" onSubmit={next2}>

              <h2 class="regrecoil-form_title regrecoil-title">Page 2</h2>


              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>




              <button class="regrecoil-form__button regrecoil-button regrecoil-submit" onClick={back1}>BACK</button>
              <button class="regrecoil-form__button regrecoil-button regrecoil-submit" >NEXT</button>
            </form>
            <div class="regrecoil-switch__circle"></div>
            <div class="regrecoil-switch__circle regrecoil-switch__circle--t"></div>
          </div>
        )}

        {Screen3 && (
          <div class="regrecoil-container3 regrecoil-b-container3 regrecoil-is-gx3" id="b-container">

            <form class="regrecoil-form" id="b-form" method="" action="" onSubmit={() => { navigate("/recoil"); }}>

              <h2 class="regrecoil-form_title regrecoil-title">Page 3</h2>


              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>
              <input class="regrecoil-form__input" id='user_phone' type="text" placeholder="Email" required/>




              <button class="regrecoil-form__button regrecoil-button regrecoil-submit" onClick={back2}>BACK</button>
              <button class="regrecoil-form__button regrecoil-button regrecoil-submit" >SUBMIT</button>
            </form>
            <div class="regrecoil-switch__circle"></div>
            <div class="regrecoil-switch__circle regrecoil-switch__circle--t"></div>
          </div>
        )}


      </div>
    </div>
  )
}

export default Regrecoil































































