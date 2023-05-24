import { GameResult } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
	game: GameResult;
}
export default function MosGamesCard({ game }: Props) {
	return (
		<Link href={`/games/${game.id}`} className="aside__card">
			<Image
				className="aside__image"
				src={game.background_image}
				alt={`Logo de ${game.name}`}
				width={300}
				height={300}
			/>
			<h2 className="aside__name">{game.name.slice(0, 20)}</h2>
		</Link>
	);
}
