'use client';
import Input, { change, form } from '@/atoms/Input/Input';
import { getGamesAll } from '@/services/videogame';
import { useBearStore } from '@/store/store';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function SearchBar() {
	const path = usePathname();
	const router = useRouter();
	const {
		valueSearch,
		changeValueSearch,
		filters,
		getVideoGames,
		changeResults,
		changeCache,
	} = useBearStore((state) => state);
	const handleChangeSearch = (evt: change) => {
		changeValueSearch(evt.currentTarget.value);
	};
	const handleSearch = async (evt: form) => {
		evt.preventDefault();
		if (path !== '/games') {
			router.push('/games');
		}
		const games = await getGamesAll(filters, valueSearch);
		getVideoGames(games);
		changeResults(games.count);
		changeCache(1);
	};
	return (
		<div className="searchbar">
			<Input
				handleSubmit={handleSearch}
				icon="search"
				text={valueSearch}
				type="text"
				handleChange={handleChangeSearch}
				placeholder="Busca videojuegos, consolas, etc..."
			/>
		</div>
	);
}
