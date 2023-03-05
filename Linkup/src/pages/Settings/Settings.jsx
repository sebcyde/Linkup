import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
	return (
		<div>
			Settings
			<Link to={'/'}>Home</Link>
			<Link to={'/signup'}>Sign Up</Link>
			<Link to={'/login'}>Log In</Link>
		</div>
	);
};

export default Settings;
