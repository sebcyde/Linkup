import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/Firebase';
import HomeMain from './HomeMain';
import TopNavbar from '../../components/Global/TopNavbar';

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

	return (
		<div className="Home">
			<TopNavbar />
			<HomeMain />
		</div>
	);
}
