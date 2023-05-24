import { grayIcon } from '@/Colors/colors';
import React from 'react';
import { HAndW } from './Icons';

export default function Notify() {
	return (
		<svg
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width={HAndW}
			height={HAndW}
			viewBox="0 0 48.000000 48.000000"
			preserveAspectRatio="xMidYMid meet"
		>
			<g
				transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
				fill={grayIcon}
				stroke="none"
			>
				<path
					d="M311 466 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124
-149 87z m96 -38 c29 -27 29 -65 1 -95 -27 -29 -65 -29 -95 -1 -29 27 -29 65
-1 95 27 29 65 29 95 1z"
				/>
				<path
					d="M153 400 c-50 -30 -67 -65 -74 -151 -4 -64 -10 -83 -34 -115 -38 -50
-27 -68 49 -72 31 -2 56 -7 56 -12 0 -18 44 -50 70 -50 26 0 70 32 70 50 0 5
25 10 56 12 75 4 87 22 49 72 -17 22 -29 53 -33 81 -6 56 -32 64 -32 10 0 -37
20 -86 48 -117 14 -17 6 -18 -158 -18 -164 0 -172 1 -158 18 32 35 48 82 48
137 0 31 7 69 15 85 16 32 61 60 95 60 11 0 20 7 20 15 0 22 -48 19 -87 -5z
m97 -355 c-7 -8 -20 -15 -30 -15 -10 0 -23 7 -30 15 -11 13 -7 15 30 15 37 0
41 -2 30 -15z"
				/>
			</g>
		</svg>
	);
}
