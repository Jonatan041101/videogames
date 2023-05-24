import Icons from '@/atoms/Icons/Icons';
import { CutVideo } from '@/hooks/useVideo';
import { ImageFetch, VideoForGame } from '@/types/types';
import { Direction, REF, REFNUMBER, handlePageChange } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';
interface Props {
	gameVideo: VideoForGame | null;
	gameImage: ImageFetch | null;
	refAllImages: REF;
	refContainer: REF;
	countRef: REFNUMBER;
	translateRef: REFNUMBER;
	refVideo: React.MutableRefObject<HTMLVideoElement | null>;
	handleChangeVideo: (video: number) => void;
	cut: CutVideo;
	muted: boolean;
	handleMuted: () => void;
}

export default function HomeJSX({
	gameImage,
	gameVideo,
	countRef,
	refAllImages,
	refContainer,
	translateRef,
	refVideo,
	muted,
	handleMuted,
	handleChangeVideo,
	cut,
}: Props) {
	return (
		<div className="assets">
			<section
				className="assets__videos"
				style={{
					minHeight: `${gameVideo?.results.length === 0 ? 'auto' : '30em'}`,
				}}
			>
				{gameVideo?.results?.slice(cut.first, cut.second).map((game) => (
					<article className="assets__video" key={game.id}>
						<div className="videoimage__video">
							<video className="videoimage__source" ref={refVideo} autoPlay loop muted>
								<source src={gameVideo?.results[0]?.data[480] ?? ''} />
							</video>
						</div>
					</article>
				))}

				{gameVideo && gameVideo.results.length > 0 && (
					<button className="videoimage__button" onClick={handleMuted}>
						{muted ? <Icons icon="volumen" /> : <Icons icon="muted" />}
					</button>
				)}
				<div className="assets__text">
					<h3 className="assets__title">{gameVideo?.results[cut.first]?.name}</h3>
					<div className="assets__buttons">
						{gameVideo &&
							Array.from({ length: gameVideo?.results.length }, (_, i) => (
								<button
									className={`assets__button ${cut.first === i ? 'assets__select' : ''}`}
									key={i}
									onClick={() => handleChangeVideo(i)}
								/>
							))}
					</div>
				</div>
			</section>
			<div className="assets__images" ref={refContainer}>
				<section className="assets__container" ref={refAllImages}>
					{gameImage &&
						gameImage.results.map((game) => (
							<article key={game.id} className="assets__imgs">
								<Image
									src={game.image}
									alt="Captura de el juego "
									width={1000}
									height={1000}
									className="assets__img"
								/>
							</article>
						))}
					{!gameImage &&
						Array.from({ length: 5 }, (_, i) => (
							<article key={i} className="assets__imgs"></article>
						))}
				</section>
				<div className="assets__change">
					<button
						className="assets__btn"
						onClick={() =>
							handlePageChange(
								'prev',
								refAllImages,
								refContainer,
								countRef,
								translateRef,
							)
						}
					>
						<Icons icon="prev" />
					</button>
					<button
						className="assets__btn"
						onClick={() =>
							handlePageChange(
								'next',
								refAllImages,
								refContainer,
								countRef,
								translateRef,
							)
						}
					>
						<Icons icon="next" />
					</button>
				</div>
			</div>
		</div>
	);
}
