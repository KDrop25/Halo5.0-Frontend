import React,{useState} from 'react';
import './Profile.css';
import homelogo from '../../assets/images/icons8-home.png'
import useAuth from '../../hooks/useAuth'


const Profile = () => {
  const {auth} = useAuth();
  const [stdCode, setStdCode] = useState('+91'); 
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSameAsMobile, setIsSameAsMobile] = useState(false);

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
    if (isSameAsMobile) {
      document.getElementById('whatsapp_no').value = event.target.value;
    }
  };

  const handleCheckboxChange = (event) => {
    setIsSameAsMobile(event.target.checked);
    if (event.target.checked) {
      document.getElementById('whatsapp_no').value = mobileNumber;
    } else {
      document.getElementById('whatsapp_no').value = '';
    }
  };
  
  
  return (
    <div class="profile-main">

      <div class="profile-card-main profile-navigation-card">
        <div class = "profile-navigation-cards-group-upper">
          
          <div class="profile-cards profile-navigation-cards-hero">
            <img class="profile-form__icon" src={homelogo} alt=''/>
            <h1 class="profile-navigation-hero-text">DASHBOARD</h1>
          </div>
          
          <div class="profile-vertical-cards profile-vertical-cards-upper profile-navigation-card-group-mid">
            
            <div class="profile-cards profile-navigation-cards-menu">
              <img class="profile-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="profile-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="profile-cards profile-navigation-cards-menu">
              <img class="profile-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="profile-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="profile-cards profile-navigation-cards-menu">
              <img class="profile-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="profile-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="profile-cards profile-navigation-cards-menu">
              <img class="profile-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="profile-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="profile-cards profile-navigation-cards-menu">
              <img class="profile-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="profile-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="profile-cards profile-navigation-cards-menu">
              <img class="profile-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="profile-navigation-hero-menu-text">DASHBOARD</h1>
            </div>
            
            
          </div>

        </div>
        
        
        <div class = "profile-navigation-cards-group-lower">
          <div class="profile-cards profile-navigation-cards-profile">
            <img class="profile-form__icon-profile" src={homelogo} alt=''/>
            <h1 class="profile-navigation-hero-profile-text">Karan</h1>
          </div>
        </div>
      </div>


      <div class="profile-card-main profile-card-group">
        <div class="profile-horizontal-cards profile-card-group-top">
          
          <div class="profile-cards profile-cards-top">
            <img class="profile-form__icon-top" src={homelogo} alt=''/>
            <h1 class="profile-main-username-text">Karan Agrawal</h1>
          </div>
          
          
        </div>
        
        <div class="profile-horizontal-cards profile-card-group-bottom">
          <div class="profile-cards profile-cards-bottom">

              <div class="profile-form" method="" action="" >

                <div>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Username" value={auth.user} required/>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Email" value={auth.email} required/>
                </div>
                <div>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Firstname"  required/>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Lastname" required/>
                </div>
                <div className='profile-horizontal-fields'>
                  {/* STD Code Dropdown */}
                  <select className="profile-std-code-dropdown" value={stdCode} onChange={(e) => setStdCode(e.target.value)}>
                    <option value="+1">+1 (USA)</option>
                    <option value="+7">+7 (Russia)</option>
                    <option value="+44">+44 (USA)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+92">+92 (Pakistan)</option>
                    <option value="+94">+94 (Sri Lanka)</option>
                    <option value="+975">+975 (Bhutan)</option>
                    <option value="+880">+880 (Bangladesh)</option>
                  </select>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Mobile No." required value={mobileNumber} onChange={handleMobileNumberChange}/>
                  <input class="profile-form__input" id='whatsapp_no' type="text" placeholder="Whatsapp No." required/>
                  <input class="profile-form__checkbox" id='first_name' type="checkbox" placeholder="Whatssap No." checked={isSameAsMobile} onChange={handleCheckboxChange}/>
                  <p class="profile-form__checkbox-text">Is Whatssap No.<br/> Same as Mobile No.?</p>
                </div>
                <div>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Firstname" required/>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Lastname" required/>
                </div>
                <div>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Firstname" required/>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Lastname" required/>
                </div>
                <div>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Firstname" required/>
                  <input class="profile-form__input" id='first_name' type="text" placeholder="Lastname" required/>
                </div>
                <div className='profile-bottom-buttons'>
                  <button class="profile-form__button profile-button profile-edit" >EDIT</button>
                  <button class="profile-form__button profile-button profile-save" >SAVE</button>
                </div>
              </div>
            </div>
            
        </div>
      </div>

    </div>



  )
}


export default Profile












