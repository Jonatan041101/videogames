import React from 'react';
import {
	getComments,
	getDevelopers,
	getGame,
	getVideoAndImageGame,
} from '@/services/videogame';
import Presentation from '@/components/DetailGame/Presentation';
import Description from '@/components/DetailGame/Description';
import Assets from '@/components/DetailGame/Assets';
import Developers from '@/components/DetailGame/Developers';
interface ID {
	id: string;
}
interface Props {
	params: ID;
}
export default async function Game({ params }: Props) {
	const game = await getGame(Number(params.id));
	const assets = await getVideoAndImageGame(game.id, game.slug);
	const comments = await getComments(game.slug);
	const developers = await getDevelopers(game.slug);

	return (
		<section className="detail">
			<Presentation game={game} />
			<Description game={game} comments={comments} />
			<Assets assets={assets} />
			<Developers developers={developers} name={game.name} />
		</section>
	);
}
