import { TiposDeFilter } from '@/types/types.dates_game';
import { URL, key } from './api';

export const getGenres = async () => {
	const genres = await fetch(`${URL}genres?key=${key}`);
	const resGenres = await genres.json();
	return resGenres as TiposDeFilter;
};
export const getPlatforms = async () => {
	const platforms = await fetch(`${URL}platforms?key=${key}`);
	const resPlatforms = await platforms.json();
	return resPlatforms as TiposDeFilter;
};
export const getStores = async () => {
	const stores = await fetch(`${URL}stores?key=${key}`);
	const resStores = await stores.json();
	return resStores as TiposDeFilter;
};
export const getTags = async () => {
	const tags = await fetch(`${URL}tags?key=${key}`);
	const resTags = await tags.json();
	return resTags as TiposDeFilter;
};
