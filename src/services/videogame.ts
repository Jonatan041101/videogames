import { ResultDeveloper, GameDetail, Reedit } from '@/types/game';
import { URL, key } from './api';
import { ImageFetch, VideoForGame, VideoGamesPages } from '@/types/types';
import { SelectFilterType } from '@/components/FiltersMap';
import { FiltersQuery } from '@/store/slices/filters';

export const getGame = async (id: number) => {
	const game = await fetch(`${URL}games/${id}?key=${key}`);
	const parseGame = (await game.json()) as GameDetail;
	return parseGame;
};
export const getVideoAndImageGame = async (id: number, name: string) => {
	const resVideo = await fetch(`${URL}games/${id}/movies?key=${key}`);
	const resImage = await fetch(`${URL}games/${name}/screenshots?key=${key}`);

	const parseVideo = (await resVideo.json()) as VideoForGame;
	const parseImage = (await resImage.json()) as ImageFetch;
	console.log({ parseVideo, parseImage });
	return {
		parseVideo,
		parseImage,
	};
};
export const getComments = async (slug: string) => {
	const reddit = await fetch(`${URL}games/${slug}/reddit?key=${key}`);
	const comments = (await reddit.json()) as Reedit;
	const commentsText = comments.results.filter(({ text }) => text.length > 0);

	return commentsText;
};
export const getDevelopers = async (slug: string) => {
	const developers = await fetch(
		`${URL}games/${slug}/development-team?key=${key}`,
	);
	const development = (await developers.json()) as ResultDeveloper;
	return development;
};
export const createQuery = (filters: FiltersQuery) => {
	let query: string = '';
	for (let single in filters) {
		if (filters[single as SelectFilterType] !== null) {
			query += `&${single}=${filters[single as SelectFilterType]}`;
		}
	}
	return query;
};
export const getGamesAll = async (filters: FiltersQuery, value: string) => {
	const query = createQuery(filters);
	if (value.length > 0) {
		const resGames = await fetch(
			`${URL}games?key=${key}${query}&search=${value}`,
		);
		const games = (await resGames.json()) as VideoGamesPages;
		return games;
	}
	const resGames = await fetch(`${URL}games?key=${key}${query}`);
	const games = (await resGames.json()) as VideoGamesPages;
	return games;
};
