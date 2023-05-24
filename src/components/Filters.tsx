'use client';
import { TiposDeFilter } from '@/types/types.dates_game';
import React, { useState } from 'react';
import FiltersMap from './FiltersMap';
import { useBearStore } from '@/store/store';
import { getGamesAll } from '@/services/videogame';
import NameFilters from './NameFilters';

export interface PropsFilter {
	tags: TiposDeFilter;
	stores: TiposDeFilter;
	genres: TiposDeFilter;
	platforms: TiposDeFilter;
}

export type Select = 'Etiquetas' | 'Tiendas' | 'Generos' | 'Plataformas';

export default function Filters({
	tags,
	stores,
	genres,
	platforms,
}: PropsFilter) {
	const [select, setSelect] = useState<Select | null>(null);

	const { filters, valueSearch, getVideoGames, changeResults, filtersView } =
		useBearStore((state) => state);

	const handleChangeSelect = (name: Select) => {
		if (name === select) {
			return setSelect(null);
		}
		setSelect(name);
	};
	const searchVideoGames = async () => {
		const games = await getGamesAll(filters, valueSearch);
		changeResults(games.count);
		getVideoGames(games);
	};

	return (
		<div className="filters__container" data-view={filtersView}>
			<div className="filters__div">
				<FiltersMap
					filters={tags}
					name="Etiquetas"
					onSelect={handleChangeSelect}
					nameSelect={select}
					typeSearch="tags"
				/>
				<FiltersMap
					filters={stores}
					name="Tiendas"
					onSelect={handleChangeSelect}
					nameSelect={select}
					typeSearch="stores"
				/>
				<FiltersMap
					filters={genres}
					name="Generos"
					onSelect={handleChangeSelect}
					nameSelect={select}
					typeSearch="genres"
				/>
				<FiltersMap
					nameSelect={select}
					filters={platforms}
					name="Plataformas"
					onSelect={handleChangeSelect}
					typeSearch="platforms"
				/>

				<div>
					<NameFilters
						tags={tags}
						platforms={platforms}
						genres={genres}
						stores={stores}
					/>
				</div>
				<div className="filters__search">
					<button onClick={searchVideoGames} className="filters__button">
						Buscar
					</button>
				</div>
			</div>
		</div>
	);
}
