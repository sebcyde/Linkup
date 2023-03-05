import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnPage from './BtnPage.jsx'
import './Login.css';


export default function Login({handleChange, text}) {
  return (
    <div>
        <h1>Login page</h1>
        <div className='outfield'>
        <div className='wrapper'>
            <img src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png" alt="" />
            <input type="text" placeholder='Username' name="text"  value={text} required className='verification ' onChange={handleChange}/>
            <input type="text" placeholder='Password' required  name='password'className='verification password' />
            <div className='check-wrapper'>
                <input type="checkbox" name="" id="" />
                <p className='remember'>Remember me</p>
            </div>
            <BtnPage text={text} handleChange={handleChange} />
        </div>
    </div>
    </div>
  )
}
