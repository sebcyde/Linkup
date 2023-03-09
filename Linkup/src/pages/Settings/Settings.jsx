import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Settings = () => {
	
	return (
		<div>
			Settings
			<Link to={'/'}>Home</Link>
			<Link to={'/signup'}>Sign Up</Link>
			<Link to={'/login'}>Log In</Link>
			<Link to={'/ErrorPage'}>Error</Link>
		</div>
	);
};

export default Settings;
