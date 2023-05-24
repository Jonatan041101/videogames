import React from 'react';

interface Props {
	children: React.ReactNode;
	textWhite: string;
	textColor: string;
}

export default function Title({ children, textColor, textWhite }: Props) {
	return (
		<div className="title">
			<h2 className="title__h2">
				{textWhite} <span className="title__span">{textColor}</span>
			</h2>
			<section className="title__section">{children}</section>
		</div>
	);
}
