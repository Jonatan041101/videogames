import { useRef, useState } from 'react';
export interface CutVideo {
	first: number;
	second: number;
}
const INITIAL_STATE: CutVideo = {
	first: 0,
	second: 1,
};
export default function useVideo() {
	const [cut, setCut] = useState<CutVideo>(INITIAL_STATE);
	const refVideo = useRef<HTMLVideoElement | null>(null);
	const [muted, setMuted] = useState<boolean>(false);

	const handleChangeVideo = (video: number) => {
		setCut({
			...cut,
			first: video,
			second: video + 1,
		});
		refVideo.current?.load();
	};
	const handleMuted = () => {
		if (refVideo.current) {
			refVideo.current.muted = !refVideo.current?.muted;
			setMuted(!muted);
		}
	};
	return {
		cut,
		handleChangeVideo,
		refVideo,
		muted,
		setCut,
		handleMuted,
	};
}
