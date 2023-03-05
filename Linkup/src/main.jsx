import ReactDOM from 'react-dom/client';
import './Styles/Globals/Global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import ErrorPage from './pages/Error/ErrorPage';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import React from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from './config/Firebase';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/signup',
		element: <SignUp />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/settings',
		element: <Settings />,
		errorElement: <ErrorPage />,
	},
]);

onAuthStateChanged(Auth, (user) => {
	if (user) {
		// User is logged in
		const uid = user.uid;
		console.log('Signed In', user);
	} else {
		// User is signed out
		console.log('Signed Out');
	}
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
