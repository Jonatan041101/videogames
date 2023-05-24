'use client';
import { getGames } from '@/services/videogames';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import ChangePage from './ChangePage';
import { useBearStore } from '@/store/store';
import SearchBar from './SearchBar';
import { SelectFilterType } from './FiltersMap';

export const FAVORIT = '@favorit';

export default function Cards() {
	const [favoritsIds, setFavoritsIds] = useState<number[]>([]);
	const {
		countPageSize,
		countResults,
		getVideoGames,
		videoGamesAll,
		changeResults,
		filters,
		valueSearch,
	} = useBearStore((state) => state);
	useEffect(() => {
		const existFavoritLocale = window.localStorage.getItem(FAVORIT);
		if (existFavoritLocale) {
			const ids = JSON.parse(existFavoritLocale) as number[];
			setFavoritsIds(ids);
		}
		const getGamesCards = async () => {
			const resGames = await getGames({ page_size: countPageSize, page: 1 });
			if (resGames) {
				getVideoGames(resGames);
				changeResults(resGames.count);
			}
		};
		if (videoGamesAll === null) {
			getGamesCards();
		}
	}, []);
	const handleChangePage = async (i: number) => {
		const query = { page_size: countPageSize, page: i };
		interface Query {
			[key: string]: string;
		}
		const queryFilter: Query = {};
		for (let single in filters) {
			if (filters[single as SelectFilterType] !== null) {
				queryFilter[single] = String(filters[single as SelectFilterType]);
			}
		}
		if (valueSearch.length > 0) {
			const queryStr = { ...query, search: valueSearch, ...queryFilter };
			const resGames = await getGames(queryStr);
			if (resGames) {
				getVideoGames(resGames);
			}
			return;
		}
		const resGames = await getGames(query);
		if (resGames) {
			getVideoGames(resGames);
		}
	};

	return (
		<div className="cards">
			<SearchBar />
			<ChangePage
				countsPages={countPageSize}
				results={countResults}
				changePage={handleChangePage}
			/>
			<section className="card__container">
				{videoGamesAll?.results.map((game) => (
					<Card game={game} key={game.id} favoritsId={favoritsIds} />
				))}
				{!videoGamesAll &&
					Array.from({ length: 20 }, (_, i) => (
						<article key={i + 30} className="card__load"></article>
					))}
			</section>
			<ChangePage
				countsPages={countPageSize}
				results={countResults}
				changePage={handleChangePage}
			/>
		</div>
	);
}
