import React from 'react';
import Icons, { IconsType } from '../Icons/Icons';

interface Props {
	icon: IconsType;
	handleClick?: () => void;
}

export default function SpecialIcon({ icon, handleClick }: Props) {
	return (
		<i className="icon__i">
			<Icons icon={icon} />
		</i>
	);
}
