import { create } from 'zustand';
import { VideoGamesStore, videogamesSlice } from './slices/videogamesSlice';
import { FiltersAndCarruzel, sliceFilter } from './slices/filters';
import { ButtonSlice, Buttons } from './slices/buttons';
export const useBearStore = create<
	VideoGamesStore & FiltersAndCarruzel & Buttons
>((...set) => ({
	...videogamesSlice(...set),
	...sliceFilter(...set),
	...ButtonSlice(...set),
}));
