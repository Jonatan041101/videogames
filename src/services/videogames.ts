import { FetchApiGames, Platforms, VideoGamesPages } from '@/types/types';

export interface QueryGames {
	[key: string]: string | number;
}

export const videogamesFetch = process.env.NEXT_PUBLIC_API_VIDEOGAMES;
export const urlDinamic = (query: QueryGames) => {
	let queryStr: string = '';
	for (let str in query) {
		queryStr += `&${str}=${query[str]}`;
	}
	return queryStr;
};
export const getGames = async (query: QueryGames) => {
	const queryStr = urlDinamic(query);
	if (videogamesFetch) {
		const res = await fetch(`${videogamesFetch}${queryStr}`);
		const data = (await res.json()) as VideoGamesPages;
		return data;
	}
};
const errorMessage = 'No has ingresado la variable de entorno.';
export default async function getVideoGames(): Promise<FetchApiGames> {
	try {
		if (!process.env.NEXT_PUBLIC_API_PLATFORMS) {
			throw new Error(errorMessage);
		}

		const videogames = await getGames({ page: '1' });
		const resPlatforms = await fetch(process.env.NEXT_PUBLIC_API_PLATFORMS);

		const platforms = (await resPlatforms.json()) as Platforms;
		if (!videogames) {
			throw new Error(errorMessage);
		}
		return { videogames: videogames, platforms };
	} catch (error) {
		const ERROR = error as Error;
		throw new Error(ERROR.message);
	}
}
