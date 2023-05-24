import Button from '@/atoms/Button/Button';
import { useBearStore } from '@/store/store';
import React, { useEffect } from 'react';

interface Props {
	countsPages: number;
	results: number;
	changePage: (i: number) => void;
}

export default function ChangePage({
	countsPages,
	results,
	changePage,
}: Props) {
	const {
		cache,
		cut,
		buttonChange,
		changeButtonsNumber,
		prevNextPage,
		effectPage,
		changeCache,
	} = useBearStore((state) => state);
	const buttons = Array.from({ length: results / countsPages }, (_, i) => i);

	useEffect(() => {
		if (cache <= 3) {
			effectPage(true, 3, 7);
		}
		if (cache >= buttons.length - 3) {
			effectPage(true, buttons.length - 7, buttons.length - 3);
		}
	}, [cache]);

	const handleChangePage = (i: number) => {
		changePage(i);
		changeButtonsNumber(i);
	};
	const handleButtonChange = (i: number) => {
		changePage(i);
		changeCache(i);
		if (i > cut.first + 2) {
			return buttonChange(true);
		}
		if (cut.first >= 4) {
			return buttonChange(false);
		}
	};
	const handlePrevNextPage = (i: number) => {
		if (cache + i >= buttons.length || cache + i === 0) {
			return;
		}
		const newCache = cache + i;
		changePage(newCache);
		if (cache >= 4) {
			const first = cut.first + i < 3 ? 3 : cut.first + i;
			const second = cut.second + i < 7 ? 7 : cut.second + i;
			return prevNextPage(i, first, second, true);
		}
		prevNextPage(i, cut.first, cut.second, false);
	};

	return (
		<div className="changepage">
			<Button i={''} icon="prev" changePage={handlePrevNextPage} page={-1} />
			{buttons.slice(0, 3).map((i) => (
				<Button
					key={i}
					i={i + 1}
					changePage={handleChangePage}
					page={i + 1}
					cache={cache}
				/>
			))}
			{cut.first === 3 ? '' : '...'}
			{buttons.slice(cut.first, cut.second).map((i) => (
				<Button
					key={i}
					i={i + 1}
					changePage={handleButtonChange}
					page={i + 1}
					cache={cache}
				/>
			))}
			{cut.first === buttons.length - 7 ? '' : '...'}
			{buttons.slice(buttons.length - 3, buttons.length).map((i) => (
				<Button
					key={i}
					i={i + 1}
					changePage={handleChangePage}
					page={i + 1}
					cache={cache}
				/>
			))}
			<Button i={''} icon="next" changePage={handlePrevNextPage} page={1} />
		</div>
	);
}
