// 'use client';
import { TiposDeFilter } from '@/types/types.dates_game';
import React, { useEffect, useRef } from 'react';
import SelectFilter from './SelectFilter';
import Icons from '@/atoms/Icons/Icons';
import { Select } from './Filters';
import { useBearStore } from '@/store/store';
export type SelectFilterType = 'tags' | 'stores' | 'genres' | 'platforms';

interface Props {
	filters: TiposDeFilter;
	name: Select;
	nameSelect: Select | null;
	typeSearch: SelectFilterType;
	onSelect: (name: Select) => void;
}

export default function FiltersMap({
	filters,
	name,
	onSelect,
	typeSearch,
	nameSelect,
}: Props) {
	const ulRef = useRef<HTMLUListElement | null>(null);
	const { changeFilters, filters: FilterStore } = useBearStore((state) => state);
	useEffect(() => {
		if (ulRef.current) {
			if (ulRef.current.style.display === 'block') {
				ulRef.current.style.display = 'none';
			} else {
				if (name === nameSelect) {
					ulRef.current.style.display = 'block';
				}
			}
		}
	}, [nameSelect, name]);
	const handleOpenSelect = (name: Select) => {
		onSelect(name);
	};
	const handleSelect = (name: Select, type: SelectFilterType, value: string) => {
		onSelect(name);
		const prevValue = FilterStore[type];
		if (prevValue === null) {
			return changeFilters(type, value);
		}
		const existId = prevValue.split(',').some((strId) => strId === value);
		if (!existId) {
			const newQuery = `${prevValue},${value}`;
			return changeFilters(type, newQuery);
		}
	};
	return (
		<div className="filters">
			<div className="filters__span" onClick={() => handleOpenSelect(name)}>
				{name} <Icons icon="down" />
			</div>
			<ul className="filters__ul" ref={ulRef}>
				{filters.results.map((tag) => (
					<SelectFilter
						filters={tag}
						key={tag.id}
						name={name}
						type={typeSearch}
						handleOpenSelect={handleSelect}
					/>
				))}
			</ul>
		</div>
	);
}
