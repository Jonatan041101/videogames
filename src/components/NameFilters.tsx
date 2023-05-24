import { useBearStore } from '@/store/store';
import React from 'react';
import { PropsFilter } from './Filters';
import MapFilterSelect from './MapFilterSelect';
import { TiposDeFilter } from '@/types/types.dates_game';

const filterNames = (array: TiposDeFilter, filters: string | null) => {
	const arrayFilter = array.results.filter(({ id }) => {
		const arrayString = filters?.split(',');
		if (arrayString?.includes(String(id))) return true;
		return false;
	});
	return arrayFilter;
};

export default function NameFilters({
	genres,
	platforms,
	stores,
	tags,
}: PropsFilter) {
	const { filters } = useBearStore((state) => state);
	const arrayFilter = Object.entries(filters);

	const tagsFilter = filterNames(tags, filters.tags);

	const platformFilter = filterNames(platforms, filters.platforms);

	const storesFilter = filterNames(stores, filters.stores);

	const genresFilter = filterNames(genres, filters.genres);

	return (
		<div className="filselect">
			<MapFilterSelect filter={tagsFilter} name="Etiquetas" keyValue="tags" />
			<MapFilterSelect
				filter={platformFilter}
				name="Plataformas"
				keyValue="platforms"
			/>
			<MapFilterSelect filter={storesFilter} name="Tiendas" keyValue="stores" />
			<MapFilterSelect filter={genresFilter} name="Generos" keyValue="genres" />
		</div>
	);
}
