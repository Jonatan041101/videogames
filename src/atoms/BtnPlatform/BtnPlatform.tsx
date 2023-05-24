import { PlatformElement } from '@/types/game';
import React from 'react';

interface Props {
	platform: PlatformElement;
}
type GameColor = 'pc' | 'xbox360' | 'playstation3' | 'linux' | 'macos';
const backgroundColor = (color: GameColor) => {
	const colors = {
		pc: '#262a31',
		xbox360: '#259d18',
		'xbox-series-x': '#259d18',
		'xbox-one': '#259d18',
		'xbox-old': '#259d18',
		playstation1: '#2566eb',
		playstation2: '#2566eb',
		playstation3: '#2566eb',
		playstation4: '#2566eb',
		playstation5: '#2566eb',
		'ps-vita': '#2566eb',
		psp: '#2566eb',
		linux: '#960025',
		macos: '#b9c1c7',
		'nintendo-switch': '#e0544a',
		'nintendo-3ds': '#e0544a',
		'nintendo-ds': '#e0544a',
		'nintendo-dsi': '#e0544a',
		'nintendo-64': '#e0544a',
		'wii-u': '#313b45',
		wii: '#313b45',
		gamecube: '#65599f',
		'game-boy-advance': '#65599f',
		'game-boy-color': '#65599f',
		'game-boy': '#65599f',
		snes: '#c2bcba',
		nes: '#c2bcba',
		macintosh: '#c2bcba',
		'sega-saturn': '#0060a7',
		'sega-cd': '#0060a7',
		'sega-32x': '#0060a7',
		'sega-master-system': '#0060a7',
		genesis: '#0060a7',
		web: '#11c4e8',
		android: '#30d780',
	};
	return colors[color] ?? '#ff0000';
};

export default function BtnPlatform({ platform }: Props) {
	console.log(platform.platform.slug);

	const background = backgroundColor(platform.platform.slug as GameColor);
	return (
		<div className="presentation__platform" style={{ background }}>
			{platform.platform.name}
		</div>
	);
}
