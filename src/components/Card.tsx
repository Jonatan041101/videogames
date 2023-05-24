'use client';
import Icons from '@/atoms/Icons/Icons';
import { GameResult } from '@/types/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FAVORIT } from './Cards';
import { existFavoritsInLocaleStorage } from '@/services/getFavorits';

interface Props {
	game: GameResult;
	favoritsId: number[];
	deleteFavorit?: (id: number) => void;
}

export default function Card({ game, favoritsId, deleteFavorit }: Props) {
	const [favorit, setFavorit] = useState<boolean>(favoritsId.includes(game.id));
	const router = useRouter();
	useEffect(() => {
		const local = existFavoritsInLocaleStorage();
		if (local) {
			const inLocalStorage = local.includes(game.id);
			setFavorit(inLocalStorage);
		}
	}, []);
	const handleFavorit = (evt: React.MouseEvent<HTMLDivElement>) => {
		evt.stopPropagation();
		setFavorit(() => !favorit);
		if (deleteFavorit) {
			deleteFavorit(game.id);
		}
		if (!favorit) {
			const existFavoritLocale = window.localStorage.getItem(FAVORIT);
			if (!existFavoritLocale) {
				return window.localStorage.setItem(FAVORIT, JSON.stringify([game.id]));
			}
			const favorits = JSON.parse(existFavoritLocale) as number[];
			const existsId = favorits.some((id) => id === game.id);
			if (!existsId) {
				window.localStorage.setItem(
					FAVORIT,
					JSON.stringify([...favorits, game.id]),
				);
			}
		} else {
			const existFavoritLocale = window.localStorage.getItem(FAVORIT);
			if (existFavoritLocale) {
				const favorits = JSON.parse(existFavoritLocale) as number[];
				const deletFavorits = favorits.filter((id) => id !== game.id);
				window.localStorage.setItem(FAVORIT, JSON.stringify(deletFavorits));
			}
		}
	};
	const handleDetailCard = () => {
		router.push(`/games/${game.id}`);
	};
	return (
		<article className="card" onClick={handleDetailCard}>
			<div className="card__div">
				<div className="card__favorit" onClick={handleFavorit}>
					{favorit ? <Icons icon="heart-like" /> : <Icons icon="heart" />}
				</div>
				<span className="card__rating">★ {game?.rating ?? 0}</span>
				<Image
					className="card__image"
					src={game.background_image ?? ''}
					alt={`Imagen del juego ${game?.name ?? ''}`}
					width={300}
					height={200}
				/>
			</div>

			<h3 className="card__h3">{game.name ?? ''}</h3>
		</article>
	);
}
