import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnPage from './BtnPage';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login({ handleChange, text, contacts }) {
	return (
		<div className="LoginComponent">
			{/* // try using this next contacts ?  */}
			<div className="outfield">
				<div className="wrapper loginpagecontainer">
					<h2>Login</h2>
					<div className="input-username-wrapper">
						<EmailIcon />
						<input
							type="email"
							placeholder="Email"
							name="email"
							required
							value={text}
							className="input-username "
							onChange={handleChange}
						/>
					</div>
					<div className="input-username-wrapper">
						<LockIcon />
						<input
							type="Password"
							placeholder="Password"
							required
							name="password"
							className="input-username"
						/>
						<VisibilityOffIcon />
					</div>
					<BtnPage text={text} handleChange={handleChange} />
					<Link to={'/signup'}>Sign Up</Link>
					<Link to={'/'}>Home</Link>
				</div>
			</div>
			
		</div>
	);
}
