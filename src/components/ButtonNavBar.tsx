'use client';
import Icons from '@/atoms/Icons/Icons';
import { useBearStore } from '@/store/store';
import React from 'react';

export default function ButtonNavBar() {
	const { changeViewNavBar } = useBearStore((state) => state);
	return (
		<div className="nav__button" onClick={changeViewNavBar}>
			<Icons icon="circle" />
		</div>
	);
}
