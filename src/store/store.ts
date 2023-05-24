import { create } from 'zustand';
import { VideoGamesStore, videogamesSlice } from './slices/videogamesSlice';
import { FiltersAndCarruzel, sliceFilter } from './slices/filters';
import { ButtonSlice, Buttons } from './slices/buttons';
import { Estilos, sliceEstilos } from './slices/estilos';
export const useBearStore = create<
	VideoGamesStore & FiltersAndCarruzel & Buttons & Estilos
>((...set) => ({
	...videogamesSlice(...set),
	...sliceFilter(...set),
	...ButtonSlice(...set),
	...sliceEstilos(...set),
}));
