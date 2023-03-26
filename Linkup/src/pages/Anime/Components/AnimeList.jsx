import React, { useEffect, useState } from 'react';
import {
	PullAllAnimeData,
	PullAnimeDataByLetter,
} from '../../../Functions/AnimeFunctions';
import { LetterFilter } from '../../../Store/Slices/AnimeLetterFilterSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { AnimeGenreFilter } from '../../../Store/Slices/AnimeGenreFilterSlice';
import { useDispatch } from 'react-redux';
import { SetAnimeName } from '../../../Store/Slices/CurrentAnimeSlice';

const AnimeList = () => {
	const [AllAnime, setAllAnime] = useState([]);
	const [Loading, setLoading] = useState(true);
	const CurrentGenre = useSelector(AnimeGenreFilter);
	const CurrentLetter = useSelector(LetterFilter);
	const dispatch = useDispatch();

	const PushNameToStore = async (ID) => {
		console.log(`Pushing ID ${ID} to Redux`);
		dispatch(SetAnimeName(ID));
	};

	const PullData = async () => {
		const FullList = await PullAllAnimeData();
		setAllAnime(FullList);
		setLoading(false);
	};

	const UpdateData = async () => {
		if (CurrentLetter.Letter) {
			setLoading(true);
			const FullList = await PullAnimeDataByLetter(CurrentLetter.Letter);
			setAllAnime(FullList);
			setLoading(false);
		}
	};

	useEffect(() => {
		PullData();
	}, []);

	useEffect(() => {
		UpdateData();
	}, [CurrentLetter]);

	return (
		<div className="AnimeList">
			{!Loading &&
				AllAnime.filter((Anime) => {
					if (!CurrentGenre.Genre) return true;
					else if (
						Anime.genres.some(
							(Genres) =>
								Genres.name.toLowerCase() == CurrentGenre.Genre?.toLowerCase()
						)
					)
						return true;
				}).map((Anime) => {
					return (
						<div className="AnimeContainer">
							<div className="ImageContainer">
								<img
									src={
										Anime.images.webp.large_image_url
											? Anime.images.webp.large_image_url
											: Anime.images.jpg.large_image_url
									}
									onClick={() => PushNameToStore(Anime.mal_id)}
								/>
							</div>
							<div className="AnimeDetailsContainer">
								<p
									className="AnimeTitle"
									onClick={() => PushNameToStore(Anime.mal_id)}
								>
									{Anime.title}
								</p>
								<p className="AnimeSynopsis">{Anime.synopsis}</p>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default AnimeList;
