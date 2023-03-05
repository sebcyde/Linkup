import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnPage from './BtnPage';
import './First.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login({ handleChange, text, contacts }) {
	const [details, setDetails] = useState({ contacts });
	const user = contacts;

	return (
		<div className="LoginComponent">
			{/* // try using this next contacts ?  */}

			{user.length > 0 ? (
				<div>
					{' '}
					{user.map((element, index) => (
						<div className="outfield">
							<div className="wrapper">
								<h2>Login</h2>
								<div className="input-username-wrapper" key={index}>
									<EmailIcon />
									<p className="details">{element.email}</p>
								</div>
								<div className="input-username-wrapper" id="">
									<LockIcon />
									<p className="details password">{element.password}</p>
									<VisibilityOffIcon />
								</div>
								<BtnPage
									text={text}
									handleChange={handleChange}
									contacts={contacts}
								/>
							</div>
						</div>
					))}
				</div>
			) : (
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
					</div>
				</div>
			)}
		</div>
	);
}
