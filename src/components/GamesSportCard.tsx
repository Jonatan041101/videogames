'use client';
import { useBearStore } from '@/store/store';
import { GameResult } from '@/types/types';
import Image from 'next/image';
import React from 'react';

interface Props {
	game: GameResult;
}

export default function GamesSportCard({ game }: Props) {
	const { changeAssets } = useBearStore((state) => state);
	const handleClickChangeAssets = (id: number, name: string) => {
		changeAssets(id, name);
	};
	return (
		<article
			className="sport"
			key={game.id}
			onClick={() => handleClickChangeAssets(game.id, game.slug)}
		>
			<Image
				className="sport__image"
				src={game.background_image}
				alt={`Portada del juego ${game.name}`}
				width={500}
				height={250}
			/>
			<div className="sport__div">
				<h3 className="sport__name">{game.name}</h3>
				<p className="sport__rating">★ {game.rating}</p>
			</div>
		</article>
	);
}
