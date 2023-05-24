'use client';
import Card from '@/components/Card';
import { getFavorits } from '@/services/getFavorits';
import { GameResult } from '@/types/types';
import Image from 'next/image';
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
			{favorits.length === 0 && (
				<div className="favorits__div">
					<div className="favorits__text">
						Aun no has agregado juegos favoritos
						<Image
							className="favorits__image"
							src={
								'https://res.cloudinary.com/damjxqb5f/image/upload/v1684944951/palanca-de-mando-inal%C3%A1mbrica-rota-monocrom%C3%A1tica-del-vintage-128831618_aq4kww.jpg'
							}
							alt=""
							width={400}
							height={400}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
