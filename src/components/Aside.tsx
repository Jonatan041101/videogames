'use client';
import ProfileIcon from '@/atoms/ProfileIcon/ProfileIcon';
import SpecialIcon from '@/atoms/SpecialIcon/SpecialIcon';
import Title from '@/atoms/Title/Title';
import { QueryGames, getGames, videogamesFetch } from '@/services/videogames';
import { GameResult, VideoGamesPages } from '@/types/types';
import React, { useEffect, useState } from 'react';
import MosGamesCard from './MosGamesCard';
import GamesSportCard from './GamesSportCard';

const gamesMostGame: QueryGames = {
	platforms: '4',
	tags: 'e-sports',
	page_size: '5',
};
const urlSport: string[] = [
	`${videogamesFetch}&search=grand-theft-auto-v&page_size=1`,
	`${videogamesFetch}&search=dota-2&page_size=1`,
	`${videogamesFetch}&search=shadow-of-mordor&page_size=1&page=1`,
];

const getGamesSport = async () => {
	const resGames = await Promise.all(urlSport.map((url) => fetch(url)));
	const parseGamesSport = (await Promise.all(
		resGames.map((res) => res.json()),
	)) as VideoGamesPages[];

	return parseGamesSport;
};
export default function Aside() {
	const [games, setGames] = useState<VideoGamesPages | null>(null);
	const [sports, setSports] = useState<GameResult[]>([]);
	useEffect(() => {
		const getGamesAPI = async () => {
			try {
				const viewMostGames = await getGames(gamesMostGame);
				const gamesSport = await getGamesSport();
				if (!viewMostGames) throw new Error('No se pudo hacer la peticion.');
				setGames(viewMostGames);
				const sports = gamesSport.map(({ results }) => results);
				const sportState: GameResult[] = [];
				sports.forEach((game) => {
					sportState.push(game[0]);
				});
				setSports(sportState);
			} catch (error) {}
		};
		getGamesAPI();
	}, []);

	return (
		<div className="aside">
			{/* <section className="aside__section">
				<SpecialIcon icon="notify" />
				<SpecialIcon icon="msg" />
				<ProfileIcon />
			</section> */}
			<Title textColor="Jugados" textWhite="Recien">
				{games?.results.map((game) => (
					<MosGamesCard game={game} key={game.id} />
				))}
				{!games &&
					Array.from({ length: 5 }, (_, i) => (
						<article key={i + 10} className="aside__load"></article>
					))}
			</Title>
			<Title textColor="Juegos" textWhite="Otros">
				<div className="sport__container">
					{sports.map((game) => (
						<GamesSportCard key={game.id} game={game} />
					))}
					{sports.length === 0 &&
						Array.from({ length: 3 }, (_, i) => (
							<article key={i + 20} className="sport"></article>
						))}
				</div>
			</Title>
		</div>
	);
}
