import { grayIcon } from '@/Colors/colors';
import React from 'react';
import { HAndW } from './Icons';

export default function Msg() {
	return (
		<svg
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width={HAndW}
			height={HAndW}
			viewBox="0 0 50.000000 50.000000"
			preserveAspectRatio="xMidYMid meet"
		>
			<g
				transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
				fill={grayIcon}
				stroke="none"
			>
				<path
					d="M88 445 c-13 -16 -24 -26 -53 -53 -12 -10 -15 -41 -15 -137 0 -137 7
  -155 61 -155 32 0 39 -19 14 -40 -25 -21 -17 -33 18 -26 17 3 44 19 59 36 27
  29 29 30 127 30 75 0 103 4 113 15 27 29 37 40 53 53 22 19 22 253 -1 276 -23
  23 -357 24 -376 1z m367 -139 c0 -95 -3 -130 -12 -133 -10 -4 -13 21 -13 100
  0 83 -3 109 -16 121 -13 13 -43 16 -170 16 -141 0 -167 4 -147 24 4 3 86 5
  182 4 l176 -3 0 -129z m-50 -51 l0 -130 -112 -3 c-64 -1 -113 -7 -113 -12 0
  -12 -37 -50 -48 -50 -5 0 -7 13 -4 29 4 29 2 30 -39 33 l-44 3 -3 119 c-1 66
  0 126 2 133 4 11 43 13 183 11 l178 -3 0 -130z"
				/>
			</g>
		</svg>
	);
}
