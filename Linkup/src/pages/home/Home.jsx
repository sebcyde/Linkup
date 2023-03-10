import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/Firebase';


export default function Home() {
	const [Loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const [user] = useAuthState(auth);
	

	console.log('what user', [user]);

	// Initial app loading
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	const click = () => {
		if(user) {
			signOut(auth);
		} else {
			navigate('/Login')
		}
	}

	return (
		<div>
			<Link to={'/login'}>Login</Link>
			<Link to={'/signup'}>Signup</Link>
			<Link to={'/settings'}>Settings</Link>
			<button onClick={click}> Log Out
			
			</button>
		</div>
	);
}
