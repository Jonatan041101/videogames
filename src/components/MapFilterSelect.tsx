import Icons from '@/atoms/Icons/Icons';
import { useBearStore } from '@/store/store';
import { FilterResult } from '@/types/types.dates_game';
import React from 'react';
import { SelectFilterType } from './FiltersMap';
interface Props {
	filter: FilterResult[];
	name: string;
	keyValue: SelectFilterType;
}
export default function MapFilterSelect({ filter, name, keyValue }: Props) {
	const { changeFilters, filters } = useBearStore((state) => state);
	const deleteFilter = (id: number) => {
		const value = filters[keyValue];
		if (value) {
			const valueArray = value.split(',');
			const deleteId = valueArray.filter((strId) => strId !== String(id));
			const str = deleteId.join(',');
			if (str.length === 0) {
				return changeFilters(keyValue, null);
			}
			changeFilters(keyValue, str);
		}
	};

	return (
		<article className="filselect__container">
			<h3>{name}</h3>
			<ul className="filselect__ul">
				{filter.map((fil) => (
					<li key={fil.id} className="filselect__li">
						{fil.name}
						<button
							className="filselect__button"
							onClick={() => deleteFilter(fil.id)}
						>
							<Icons icon="close" />
						</button>
					</li>
				))}
			</ul>
		</article>
	);
}
