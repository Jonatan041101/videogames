'use client';
import { getGames } from '@/services/videogames';
import { useBearStore } from '@/store/store';
import { FetchApiGames } from '@/types/types';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface Props extends FetchApiGames {}

export default function Videogames({ platforms, videogames }: Props) {
	const [load, setLoad] = useState<boolean>(false);
	const refLoad = useRef<boolean[]>([]);
	const { getGamesStore, videogames: gamesStore } = useBearStore(
		(state) => state,
	);
	useEffect(() => {
		getGamesStore(videogames);
	}, []);

	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			{gamesStore?.results.map((game) => (
				<article
					key={game.added}
					style={{ position: 'relative', width: 200, height: 200 }}
				>
					<Image
						onLoad={() => {
							refLoad.current = [...refLoad.current, true];
							if (refLoad.current.length >= 20) {
								setLoad(() => true);
								refLoad.current = [];
							}
						}}
						src={game.background_image}
						alt={`Image de el videojuego ${game.name}`}
						width={200}
						height={200}
						style={{ objectFit: 'cover', opacity: `${load ? 1 : 0}` }}
					/>
					{!load && (
						<div style={{ position: 'absolute', top: 0 }} className="loading">
							<Image src="/assets/loading-image.png" alt="" width={200} height={200} />
						</div>
					)}
				</article>
			))}
			<button
				onClick={async () => {
					const res = await getGames(3);
					if (!res) return;
					getGamesStore(res);
				}}
			>
				NEXT
			</button>
		</div>
	);
}
