import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BtnPage() {
	let navigate = useNavigate();

	const nextPage = () => {
		navigate('home');
	};

	const signUpPage = () => {
		navigate('/signup');
	};

	return (
		<div className="footer-section">
			<button onClick={nextPage}>Sign In</button>
			<p className="forgot-text" onClick={signUpPage}>
				Register
			</p>
		</div>
	);
}
