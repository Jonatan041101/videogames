'use client';
import Card from '@/components/Card';
import { getFavorits } from '@/services/getFavorits';
import { GameResult } from '@/types/types';
import React, { useEffect, useState } from 'react';

export default function FavoritsPage() {
	const [favorits, setFavorits] = useState<GameResult[]>([]);
	useEffect(() => {
		const getFavoritsFetch = async () => {
			const res = await getFavorits();
			setFavorits(res);
		};
		getFavoritsFetch();
	}, []);
	console.log({ favorits });
	const handleDeleteGameFavorit = (id: number) => {
		const resFavorit = favorits.filter((game) => game.id !== id);
		setFavorits(resFavorit);
	};
	return (
		<div className="favorits">
			{favorits.map((game) => (
				<Card
					key={game.id}
					game={game}
					favoritsId={[]}
					deleteFavorit={handleDeleteGameFavorit}
				/>
			))}
		</div>
	);
}
