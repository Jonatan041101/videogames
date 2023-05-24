import { FilterResult } from '@/types/types.dates_game';
import React from 'react';
import { Select } from './Filters';
import { SelectFilterType } from './FiltersMap';

interface Props {
	filters: FilterResult;
	handleOpenSelect: (
		name: Select,
		type: SelectFilterType,
		value: string,
	) => void;
	name: Select;
	type: SelectFilterType;
}

export default function SelectFilter({
	filters,
	handleOpenSelect,
	name,
	type,
}: Props) {
	return (
		<li
			className="filters__li"
			onClick={() => handleOpenSelect(name, type, `${filters.id}`)}
		>
			{filters.name}
		</li>
	);
}
