import React, {useState}from "react";
import "./First.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

export default function SignUp({ addContact }) {

  const [contantInfo, setContactInfo] = useState({
    name: '', 
    email: '',
    password: ''
  })

  const handleChange2 = (event) => {
    setContactInfo({ ...contantInfo, [event.target.name]: event.target.value  });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('whats here', contantInfo);
    addContact(contantInfo);
    setContactInfo({name: '', email: '', password: ''})
    navigate('/');
  }

  let navigate = useNavigate();


  const register = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="outfield">
        <div className="wrapper">
          <h2>Registration</h2>
          <div className="input-username-wrapper">
            <PersonIcon />
            <input
              type="text"
              name='name'
              placeholder="Enter your name"
              className="input-username" 
              value={contantInfo.name}
              onChange={handleChange2}
            />
          </div>
          <div className="input-username-wrapper">
            <EmailIcon />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input-username"
              value={contantInfo.email}
              onChange={handleChange2}
              required
            />
          </div>
          <div className="input-username-wrapper">
            <LockIcon />
            <input
              type="password"
              name='password'
              placeholder="Create a password"
              className="input-username"
              value={contantInfo.password}
              onChange={handleChange2}
            />
            <VisibilityOffIcon />
          </div>
          <button  onClick={handleSubmit}  >Register Now</button>
          <div className="text-wrapper">
            <p>Already have an account?</p>
            <p className="forgot-text" onClick={register}>
              Login now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
