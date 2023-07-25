import React from 'react';
import { Home, About, Members, Events, Schedule, Contact, Signin, Signup, Privacy, Terms, Recoil, Qurious, Encode, Regrecoil, Testing, Regqurious, Regencode, Gallery } from './Pages';
import Layout from './components/Layout';
import './App.css';
import { Routes, Route } from 'react-router-dom';


const App = () => {

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/members' element={<Members />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/qurious' element={<Qurious />} />
        <Route path='/recoil' element={<Recoil />} />
        <Route path='/reg-recoil' element={<Regrecoil />} />
        <Route path='/reg-qurious' element={<Regqurious />} />
        <Route path='/reg-encode' element={<Regencode />} />
        <Route path='/encode' element={<Encode />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/test' element={<Testing />} />
      </Route>
    </Routes>


  )
}

export default App