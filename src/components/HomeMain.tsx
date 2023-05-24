'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useBearStore } from '@/store/store';
import { ImageFetch, VideoForGame } from '@/types/types';
import { getVideoAndImageGame } from '@/services/videogame';
import HomeJSX from './HomeJSX';
import useVideo from '@/hooks/useVideo';

export default function HomeMain() {
	const { idVideo, nameImage } = useBearStore((state) => state);
	const [gameImage, setGameImage] = useState<ImageFetch | null>(null);
	const [gameVideo, setGameVideo] = useState<VideoForGame | null>(null);
	const { cut, setCut, handleMuted, muted, handleChangeVideo, refVideo } =
		useVideo();
	const refContainer = useRef<HTMLDivElement | null>(null);
	const refAllImages = useRef<HTMLDivElement | null>(null);
	const translateRef = useRef<number>(0);
	const countRef = useRef<number>(0);

	useEffect(() => {
		const getAssets = async () => {
			try {
				const { parseImage, parseVideo } = await getVideoAndImageGame(
					idVideo,
					nameImage,
				);

				setGameImage(parseImage);
				setGameVideo(parseVideo);
				setCut({ ...cut, first: 0, second: 1 });
				refVideo.current?.load();
				await refVideo.current?.play();
			} catch (error) {}
		};
		getAssets();
	}, [idVideo, nameImage]);

	return (
		<HomeJSX
			defect
			handleMuted={handleMuted}
			muted={muted}
			countRef={countRef}
			cut={cut}
			gameImage={gameImage}
			gameVideo={gameVideo}
			handleChangeVideo={handleChangeVideo}
			refAllImages={refAllImages}
			refContainer={refContainer}
			refVideo={refVideo}
			translateRef={translateRef}
		/>
	);
}
