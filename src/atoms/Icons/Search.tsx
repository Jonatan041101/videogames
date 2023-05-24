import { grayIcon } from '@/Colors/colors';
import React from 'react';
import { HAndW } from './Icons';

export default function Search() {
	return (
		<svg
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width={HAndW}
			height={HAndW}
			viewBox="0 0 64.000000 64.000000"
			preserveAspectRatio="xMidYMid meet"
		>
			<g
				transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
				fill={grayIcon}
				stroke="none"
			>
				<path
					d="M205 546 c-40 -17 -95 -72 -111 -113 -19 -45 -17 -121 5 -168 52
-111 177 -155 287 -100 l49 25 57 -57 c32 -31 61 -54 65 -50 4 4 -19 33 -50
65 l-57 57 25 49 c73 144 -30 307 -192 306 -26 -1 -62 -7 -78 -14z m187 -36
c105 -71 116 -217 23 -298 -126 -111 -315 -26 -315 142 0 49 24 109 57 138 58
53 172 62 235 18z"
				/>
			</g>
		</svg>
	);
}
