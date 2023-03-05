import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function BtnPage() {
	let navigate = useNavigate();

	const nextPage = () => {
		navigate('/');
	};

	const signUpPage = () => {
		navigate('/signup');
	};

	return (
		<div className="footer-section">
			<button onClick={nextPage}>Home</button>
            <Link to={'/'}>Home</Link>
			<h2>hellow</h2>
		</div>
	);
}
