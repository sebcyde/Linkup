import React from 'react'

import { useNavigate } from 'react-router-dom';
import './Login.css'




export default function BtnPage({text, handleChange, SetText}) {
    let navigate = useNavigate();

    const isLoggedIn = text.length;

    const nextPage = () => {
        if (isLoggedIn > 0) {
            navigate('Home');
        } else {
            return
        }
    }
     
    const signUpPage = () => {
        navigate('SignUp')
    }

    
    return (
        <div className='forgotten'>
            <button className='btn' onClick={nextPage}  >Sign In</button>
            <p className='forgot-text' onClick={signUpPage}>Forgot password?</p>
        </div>
    )
}