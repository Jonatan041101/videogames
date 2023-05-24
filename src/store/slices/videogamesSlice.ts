import { VideoGamesPages } from '@/types/types';
import { StateCreator } from 'zustand';
export interface VideoGamesStore {
	videogames: VideoGamesPages | null;
	idVideo: number;
	nameImage: string;
	getGamesStore: (games: VideoGamesPages) => void;
	changeAssets: (id: number, name: string) => void;
}

export const videogamesSlice: StateCreator<VideoGamesStore> = (set) => ({
	videogames: null,
	idVideo: 3498,
	nameImage: 'grand-theft-auto-v',
	getGamesStore: (videogames) => {
		set((state) => ({
			...state,
			videogames,
		}));
	},
	changeAssets: (id, name) => {
		set((state) => ({
			...state,
			idVideo: id,
			nameImage: name,
		}));
	},
});
