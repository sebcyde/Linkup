import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PullAnimeGenres } from '../../../Functions/AnimeFunctions';
import {
	AnimeGenreFilter,
	SetGenreFilter,
} from '../../../Store/Slices/AnimeGenreFilterSlice';

const GenreFilter = () => {
	const CurrentGenre = useSelector(AnimeGenreFilter);
	const [AllGenres, setAllGenres] = useState([]);
	const [Loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	const UpdateGenreFilter = async (Genre) => {
		dispatch(SetGenreFilter(Genre));
	};

	const PullData = async () => {
		const Genres = await PullAnimeGenres();
		console.log('Genres:', Genres);
		setAllGenres(Genres);
		setLoading(false);
	};

	useEffect(() => {
		PullData();
	}, []);

	return (
		<div className="GenreFilter">
			{Loading ? (
				<h2>Loading...</h2>
			) : (
				AllGenres.map((Genre) => {
					return (
						<p
							className={CurrentGenre.Genre == Genre.name ? 'Active' : ''}
							onClick={() => UpdateGenreFilter(Genre.name)}
						>
							{Genre.name}
						</p>
					);
				})
			)}
		</div>
	);
};

export default GenreFilter;
