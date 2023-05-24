import React from 'react';

interface Props {
	text: string;
	info: string;
}

export default function DescriptionText({ info, text }: Props) {
	return (
		<div className="text">
			<div className="text__text">{text}</div>
			<div className="text__info">{info}</div>
		</div>
	);
}
