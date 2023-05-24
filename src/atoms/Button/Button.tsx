import React from 'react';
import Icons, { IconsType } from '../Icons/Icons';

interface Props {
	i: number | string;
	icon?: IconsType;
	changePage: (i: number) => void;
	page: number;
	cache?: number;
}

export default function Button({ i, icon, changePage, page, cache }: Props) {
	return (
		<button
			className="button"
			onClick={() => changePage(page)}
			style={{
				backgroundColor: `${
					cache !== undefined ? (cache === page ? '#0244a5' : '#3185ff') : '#3185ff'
				}`,
			}}
		>
			{i}
			{icon && <Icons icon={icon} />}
		</button>
	);
}
