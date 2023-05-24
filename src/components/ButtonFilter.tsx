'use client';
import Icons from '@/atoms/Icons/Icons';
import { useBearStore } from '@/store/store';
import React from 'react';

export default function ButtonFilter() {
	const { changeViewFilters } = useBearStore((state) => state);
	return (
		<div className="filters__btn" onClick={changeViewFilters}>
			<button>
				<Icons icon="bars" />
			</button>
		</div>
	);
}
