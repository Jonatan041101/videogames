import { VideoGamesPages } from '@/types/types';
import { StateCreator } from 'zustand';

interface Cut {
	first: number;
	second: number;
}
export interface Buttons {
	cut: Cut;
	cache: number;
	videoGamesAll: VideoGamesPages | null;
	changeButtonsNumber: (i: number) => void;
	getVideoGames: (games: VideoGamesPages) => void;
	buttonChange: (more: boolean) => void;
	prevNextPage: (i: number, first: number, second: number, cut: boolean) => void;
	effectPage: (low: boolean, first: number, second: number) => void;
	changeCache: (i: number) => void;
}

export const ButtonSlice: StateCreator<Buttons> = (set) => ({
	cut: {
		first: 3,
		second: 7,
	},
	videoGamesAll: null,
	cache: 1,
	buttonChange: (more) => {
		if (!more) {
			return set((state) => ({
				...state,
				cut: {
					...state.cut,
					first: state.cut.first - 1,
					second: state.cut.second - 1,
				},
			}));
		}
		return set((state) => ({
			...state,
			cut: {
				...state.cut,
				first: state.cut.first + 1,
				second: state.cut.second + 1,
			},
		}));
	},
	changeCache: (i) => {
		set((state) => ({ ...state, cache: i }));
	},
	changeButtonsNumber: (i) => {
		return set((state) => ({ ...state, cache: i }));
	},
	prevNextPage: (i, first, second, cut) => {
		if (cut) {
			set((state) => ({
				...state,
				cut: {
					...state.cut,
					first,
					second,
				},
			}));
		}

		set((state) => ({
			...state,
			cache: state.cache + i,
		}));
	},
	effectPage: (low, first, second) => {
		if (low) {
			return set((state) => ({ ...state, cut: { ...state.cut, first, second } }));
		}
		return set((state) => ({ ...state, cut: { ...state.cut, first, second } }));
	},
	getVideoGames: (games) => {
		set((state) => ({
			...state,
			videoGamesAll: games,
		}));
	},
});
