import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<Link to={'/login'}>Login</Link>
			<Link to={'/signup'}>Signup</Link>
			<Link to={'/settings'}>Settings</Link>
		</div>
	);
}
