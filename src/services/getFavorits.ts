import { FAVORIT } from '@/components/Cards';
import { URL, key } from './api';
import { GameResult } from '@/types/types';

export const existFavoritsInLocaleStorage = () => {
	const existFavoritLocale = window.localStorage.getItem(FAVORIT);
	if (existFavoritLocale) {
		const favorits = JSON.parse(existFavoritLocale) as number[];
		return favorits;
	}
	return null;
};
export const getFavorits = async () => {
	const local = existFavoritsInLocaleStorage();
	if (local) {
		console.log(`${URL}games/${local[0]}?key${key}`);
		const resFavorits = await Promise.all(
			local.map((id) => fetch(`${URL}games/${id}?key=${key}`)),
		);
		const favorits = (await Promise.all(
			resFavorits.map((res) => res.json()),
		)) as GameResult[];
		return favorits;
	}
	return [];
};
