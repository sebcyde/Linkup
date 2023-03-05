import React from 'react'
import { useNavigate } from 'react-router-dom';
import './First.css';




export default function BtnPage({text, handleChange, SetText, contacts}) {
    let navigate = useNavigate();
    const isLoggedIn = text.length;
    const regUser = contacts;
    console.log('length', regUser)

    console.log('whats the value', isLoggedIn)

    const nextPage = () => {
        if (isLoggedIn> 0) {
            navigate('Home');
        } else if (regUser.length > 0) {
            navigate('Home');
        } 
         else {
            alert('write in username and password');
        }
    }
     
    const signUpPage = () => {
        navigate('SignUp')
    }

    
    return (
        <div className='footer-section'>
            <button  onClick={nextPage}  >Sign In</button>
            <p className='forgot-text' onClick={signUpPage}>Register</p>
        </div>
    )
}