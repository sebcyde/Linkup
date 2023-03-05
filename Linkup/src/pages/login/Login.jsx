import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginUser } from '../../config/Firebase';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');

	return (
		<div className="LoginComponent">
			{/* // try using this next contacts ?  */}
			<div className="outfield">
				<div className="wrapper loginpagecontainer">
					<h2>Login</h2>
					<div className="input-username-wrapper">
						{/* <EmailIcon /> */}
						<input
							type="email"
							placeholder="Email"
							name="email"
							required
							value={Email}
							className="input-username "
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="input-username-wrapper">
						{/* <LockIcon /> */}
						<input
							type="Password"
							placeholder="Password"
							required
							name="password"
							className="input-username"
							value={Password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{/* <VisibilityOffIcon /> */}
					</div>
					<button
						onClick={() => {
							LoginUser(Email, Password);
						}}
					>
						Sign In
					</button>

					<Link to={'/signup'}>Sign Up</Link>
					<Link to={'/'}>Home</Link>
				</div>
			</div>
		</div>
	);
}
