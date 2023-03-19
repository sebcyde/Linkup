import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LeftSide() {
	const [Loading, setLoading] = useState(true);
	const [data, setData] = useState();

	const fetchData = async () => {
		try {
			const response = await axios.get('https://api.jikan.moe/v4/top/anime');
			setData(response.data);
			setLoading(false);
			console.log('api call', response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="leftSide-wrapper">
			<h1 className="header">Top Anime</h1>
			<div className="line-thru"></div>
			<div className="anime-list-wrapper">
				{Loading
					? ''
					: data.data.slice(0, 5).map((anime) => (
							<div className="anime-card" key={anime.title}>
								<h3 className="anime-header">{anime.title_english}</h3>
								<img
									className="anime-img"
									src={anime.images.jpg.image_url}
									alt=""
								/>
								<div className="anime-details">
									<p className="anime-features">{anime.synopsis}</p>
								</div>
							</div>
					  ))}
			</div>
		</div>
	);
}
