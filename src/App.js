import React from 'react';
import { Home, About, Members, Events, Schedule, Contact, Signin, Signup, Privacy, Terms, Recoil, Qurious, Encode, Regrecoil, Regqurious, Regencode, Gallery,Dashboard ,Unauthorised,Pagenotfound,Profile,ForgotPass} from './Pages';
import Layout from './components/Layout';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import RequireAuth from './hooks/RequireAuth';
import PersistLogin from './Pages/Sign-in/PersistLogin';
import ReactGA from 'react-ga';


ReactGA.initialize('UA-283028816-2')

export const ROLES = {
  'User':10,
  'Admin':10000,
  'Editor':5000
}

const App = () => {

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        
        {/* public routes*/}
        
        <Route path='/signin' element={<Signin />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/unauthorised' element={<Unauthorised />} />
        <Route path='/pagenotfound' element={<Pagenotfound />} />
        
        
        
        <Route element={<PersistLogin/>}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/members' element={<Members />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/contact' element={<Contact />} /> 
          
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/qurious' element={<Qurious />} />
          <Route path='/recoil' element={<Recoil />} />
          <Route path='/encode' element={<Encode />} />
          <Route path='/profile' element={<Profile />} />
          {/* routes for users*/}
          <Route element={<RequireAuth allowedroles={[ROLES.User]}/>}>
            <Route path='/reg-recoil' element={<Regrecoil />} />
            <Route path='/reg-qurious' element={<Regqurious />} />
            <Route path='/reg-encode' element={<Regencode />} />
            
          </Route>
          
          {/* routes for admins*/}
          <Route element={<RequireAuth allowedroles={[ROLES.Admin]}/>}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          {/* routes for editors*/}
          
        </Route>
        {/* err route*/}
        <Route path='*' element={<Pagenotfound />} />
          

      </Route>
    </Routes>

  </>
  )
}

export default App
