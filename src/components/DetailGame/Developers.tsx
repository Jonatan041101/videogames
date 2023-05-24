import { ResultDeveloper } from '@/types/game';
import Image from 'next/image';
import React from 'react';

interface Props {
	developers: ResultDeveloper;
	name: string;
}

export default function Developers({ developers, name }: Props) {
	return (
		<div className="developers">
			<h2>Desarrolladores de {name}</h2>
			<section className="developers__section">
				{developers.results.map((developer) => (
					<article className="developers__article" key={developer.id}>
						<Image
							src={
								developer.image ??
								'https://res.cloudinary.com/damjxqb5f/image/upload/v1684601124/1366_2000_w4yyhp.jpg'
							}
							alt={`${developer.name}`}
							width={150}
							height={150}
						/>
						<h3>{developer.name}</h3>
					</article>
				))}
			</section>
		</div>
	);
}
