import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import ErrorPage from './pages/Error/ErrorPage';
import SignUp from './pages/SignUp/SignUp';
import People from './pages/People/People';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login/Login';
import Anime from './pages/Anime/Anime';
import Manga from './pages/Manga/Manga';
import { Provider } from 'react-redux';
import './Styles/Globals/Global.scss';
import { store } from './Store/Store';
import Home from './pages/Home/Home';
import React from 'react';

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
		path: '/anime',
		element: <Anime />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/manga',
		element: <Manga />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/people',
		element: <People />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/settings',
		element: <Settings />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
