import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { onAuthStateChanged } from '@firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, SignupUser } from '../../config/Firebase';

export default function SignUp() {
	const [contantInfo, setContactInfo] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [user] = useAuthState(auth);

	const handleChange2 = (event) => {
		setContactInfo({ ...contantInfo, [event.target.name]: event.target.value });
	};

	const navigate = useNavigate();

	// Navigate to sign in if no user
	useEffect(() => {
		console.log('From UseEffect:', user);
		onAuthStateChanged(auth, (user) => {
			if (user) {
				navigate('/');
			}
		});
	}, [user]);

	return (
		<div className="SignupComponent">
			<div className="outfield">
				<div className="wrapper">
					<h2>Registration</h2>
					<div className="input-username-wrapper">
						<PersonIcon />
						<input
							type="text"
							name="name"
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
							name="password"
							placeholder="Create a password"
							className="input-username"
							value={contantInfo.password}
							onChange={handleChange2}
						/>
						<VisibilityOffIcon />
					</div>
					<button
						onClick={() => SignupUser(contantInfo.email, contantInfo.password)}
					>
						Register Now
					</button>
					{/* <div className="text-wrapper">
						<p>Already have an account?</p>
						<p className="forgot-text" onClick={register}>
							Login now
						</p>
					</div> */}
					<Link to={'/login'}>Login</Link>
					<Link to={'/'}>Home</Link>
				</div>
			</div>
		</div>
	);
}
