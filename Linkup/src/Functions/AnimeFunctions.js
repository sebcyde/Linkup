import axios from 'axios';

export const PullTopAnimeData = async () => {
	console.log('Pulling New Anime Data');
	const Res = await axios.get('https://api.jikan.moe/v4/top/anime');
	console.log('Response:', Res.data.data);
	return Res.data.data;
};

export const PullAllAnimeData = async () => {
	const Res = await axios.get('https://api.jikan.moe/v4/anime', {
		params: { order_by: 'title' },
	});
	let FullList = [...Res.data.data];
	console.log('Full Anime List:', Res);
	return FullList;
};

export const PullAnimeDataByLetter = async (Letter) => {
	const Res = await axios.get('https://api.jikan.moe/v4/anime', {
		params: { letter: Letter },
	});
	let FullList = [...Res.data.data];
	console.log(`Full Anime List Letter: ${Letter}:`, Res);
	return FullList;
};

export const PullAnimeGenres = async () => {
	const Res = await axios.get('https://api.jikan.moe/v4/genres/anime');
	let FullList = [...Res.data.data];
	console.log('Full Genre List:', Res);
	return FullList;
};
