import React from 'react';
import { PropsDetail } from './Presentation';
import { Comment } from '@/types/game';
import CommentC from './Comment';
import { decodeHTMLEntities, stripHTMLTags } from '@/utils/utils';
import DescriptionText from '@/atoms/DescriptionText/DescriptionText';

interface Props extends PropsDetail {
	comments: Comment[];
}

export default function Description({ game, comments }: Props) {
	const released = new Date(game.released).toLocaleString('es-AR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const roles = game.genres.map(({ name }) => name);
	const rolesStr = roles.join(', ');
	const description = stripHTMLTags(game.description);
	const descriptionFull = decodeHTMLEntities(description);

	return (
		<div className="description">
			<div className="description__paragraph">
				<h3 className="description__h3">{game.reddit_name}</h3>
				<div className="description__game">
					<p className="description__p">{descriptionFull}</p>
					<div className="description__texts">
						<DescriptionText info={released} text="Lanzamiento" />
						<DescriptionText info={rolesStr} text="Genero" />
						<DescriptionText info={game.developers[0].name} text="Desarrollado" />
					</div>
				</div>
			</div>
			<div className="description__comments">
				{comments.slice(2, 3).map((comment) => (
					<CommentC key={comment.id} comment={comment} />
				))}
				{comments.length === 0 && (
					<div className="description__non">
						Todavia el juego no tiene comentarios
					</div>
				)}
			</div>
		</div>
	);
}
