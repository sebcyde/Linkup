import ReactDOM from 'react-dom/client';
import './Styles/Globals/Global.scss';
import React from 'react';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Route from './Routes/Route';
import ErrorPage from './Routes/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Route />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
