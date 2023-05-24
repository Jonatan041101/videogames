'use client';
import { ImageFetch, VideoForGame } from '@/types/types';
import Image from 'next/image';
import React, { useRef } from 'react';
import HomeJSX from '../HomeJSX';
import useVideo from '@/hooks/useVideo';
interface Assets {
	parseVideo: VideoForGame;
	parseImage: ImageFetch;
}
interface Props {
	assets: Assets;
}
export default function Assets({ assets }: Props) {
	const { cut, handleChangeVideo, refVideo, handleMuted, muted } = useVideo();
	const refContainer = useRef<HTMLDivElement | null>(null);
	const refAllImages = useRef<HTMLDivElement | null>(null);
	const translateRef = useRef<number>(0);
	const countRef = useRef<number>(0);
	return (
		<HomeJSX
			countRef={countRef}
			handleMuted={handleMuted}
			muted={muted}
			cut={cut}
			gameImage={assets.parseImage}
			gameVideo={assets.parseVideo}
			handleChangeVideo={handleChangeVideo}
			refAllImages={refAllImages}
			refContainer={refContainer}
			refVideo={refVideo}
			translateRef={translateRef}
		/>
	);
}
