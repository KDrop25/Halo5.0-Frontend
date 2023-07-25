import React, { useState, useRef } from 'react';
import './Reg-Encode.css';

import userlogo from '../../assets/icons8-male-user.png'
import { useNavigate } from 'react-router-dom';





const Regencode = () => {
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
    <div className='regencode-main'>
      <div class="regencode-main-core">
        {Screen1 && (
          <div class="regencode-container regencode-b-container regencode-is-gx1" id="b-container">

            <form class="regencode-form" id="b-form" method="" action="">

              <h2 class="regencode-form_title regencode-title">Encode Registrations</h2>
              <span class="regencode-form__span">or use your email account</span>

              <div className='regencode-ellipse' onClick={handleClick} style={{ cursor: "pointer" }}>
                {image ? (<img src={URL.createObjectURL(image)} alt="" className="regencode-ellipse-img" />) : (<img src={userlogo} alt="" className="regencode-ellipse-img" />)}
                <input id="image-upload-input" type="file" onChange={handleImageChange} ref={hiddenFileInput} style={{ display: "none" }} />


              </div>

              <input class="regencode-form__input" id='first_name' type="text" placeholder="First Name" />
              <input class="regencode-form__input" id='last_name' type="text" placeholder="Last Name" />
              <input class="regencode-form__input" id='user_email' type="text" placeholder="Email" />
              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Phone" />

              <button class="regencode-form__button regencode-button regencode-submit" onClick={next1}>NEXT</button>
            </form>
            <div class="regencode-switch__circle"></div>
            <div class="regencode-switch__circle regencode-switch__circle--t"></div>
          </div>
        )}


        {Screen2 && (
          <div class="regencode-container2 regencode-b-container2 regencode-is-gx2" id="b-container">

            <form class="regencode-form" id="b-form" method="" action="">

              <h2 class="regencode-form_title regencode-title">Page 2</h2>


              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Email" />
              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Email" />
              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Email" />
              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Email" />
              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Email" />




              <button class="regencode-form__button regencode-button regencode-submit" onClick={back1}>BACK</button>
              <button class="regencode-form__button regencode-button regencode-submit" onClick={next2}>NEXT</button>
            </form>
            <div class="regencode-switch__circle"></div>
            <div class="regencode-switch__circle regencode-switch__circle--t"></div>
          </div>
        )}

        {Screen3 && (
          <div class="regencode-container3 regencode-b-container3 regencode-is-gx3" id="b-container">

            <form class="regencode-form" id="b-form" method="" action="">

              <h2 class="regencode-form_title regencode-title">Page 3</h2>


              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Email" />
              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Email" />
              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Email" />
              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Email" />
              <input class="regencode-form__input" id='user_phone' type="text" placeholder="Email" />




              <button class="regencode-form__button regencode-button regencode-submit" onClick={back2}>BACK</button>
              <button class="regencode-form__button regencode-button regencode-submit" onClick={() => { navigate("/encode"); }}>SUBMIT</button>
            </form>
            <div class="regencode-switch__circle"></div>
            <div class="regencode-switch__circle regencode-switch__circle--t"></div>
          </div>
        )}


      </div>
    </div>
  )
}

export default Regencode































































