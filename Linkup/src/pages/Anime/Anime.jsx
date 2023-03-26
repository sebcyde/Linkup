import React from 'react';
import TopNavbar from '../../components/Global/TopNavbar';
import AllAnimePage from './Pages/AllAnimePage';

const Anime = () => {
	return (
		<div>
			<TopNavbar />
			<h2>Anime</h2>
			<AllAnimePage />
		</div>
	);
};

export default Anime;
