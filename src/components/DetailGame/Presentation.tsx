import BtnPlatform from '@/atoms/BtnPlatform/BtnPlatform';
import DescriptionText from '@/atoms/DescriptionText/DescriptionText';
import Icons from '@/atoms/Icons/Icons';
import { GameDetail } from '@/types/game';
import React from 'react';
export interface PropsDetail {
	game: GameDetail;
}
export default function Presentation({ game }: PropsDetail) {
	const roles = game.genres.map(({ name }) => name);
	const rolesStr = roles.join(' / ');
	return (
		<section
			style={{
				backgroundImage: `url(${game.background_image})`,
			}}
			className="presentation"
		>
			<article className="presentation__article">
				<div className="presentation__platforms">
					<div className="presentation__buttons">
						{game.platforms.map((platform) => (
							<BtnPlatform key={platform.platform.id} platform={platform} />
						))}
					</div>
					<h2 className="presentation__h2">{game.name}</h2>
				</div>
				<div className="presentation__genres">
					<div className="presentation__rating">
						<div className="presentation__stars">
							<span className="presentation__star">{'★'.repeat(game.rating)}</span>
							<span className="presentation__star">
								{''.repeat(game.rating).padEnd(5, '★').slice(game.rating)}
							</span>
						</div>
						<div className="presentation__votos">
							{game.rating} de {game.ratings_count} votos
						</div>
					</div>
					<div className="presentation__roles">
						<span>Generos Del Juego {rolesStr}</span>
					</div>
				</div>
				<div className="presentation__store">
					<div className="presentation__btns">
						<a
							className="presentation__a"
							target="_blank"
							href={`https://${game?.stores[0]?.store?.domain}` ?? ''}
						>
							<span className="presentation__add">Adquirir</span>
							<Icons icon="points" />
						</a>
						<div className="presentation__likes">
							<Icons icon="heart-l" />
							{game.reviews_count}
						</div>
					</div>
					<article className="presentation__views">
						<DescriptionText text={String(game.game_series_count)} info="Jugando" />
						<DescriptionText text={String(game.suggestions_count)} info="Vistas" />
						<DescriptionText text={String(game.additions_count)} info="Deseado" />
					</article>
				</div>
			</article>
		</section>
	);
}
