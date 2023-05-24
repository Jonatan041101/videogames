import ButtonFilter from '@/components/ButtonFilter';
import Cards from '@/components/Cards';
import Filters from '@/components/Filters';
import { getGenres, getPlatforms, getStores, getTags } from '@/services/filter';
import React from 'react';

export default async function GamesPage() {
	const genres = await getGenres();
	const platforms = await getPlatforms();
	const tags = await getTags();
	const stores = await getStores();

	return (
		<div className="games">
			<Filters genres={genres} platforms={platforms} tags={tags} stores={stores} />
			<Cards />
			<ButtonFilter />
		</div>
	);
}
