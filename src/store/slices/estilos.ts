import { StateCreator } from 'zustand';

export interface Estilos {
	filtersView: boolean;
	navBarView: boolean;
	changeViewNavBar: () => void;
	changeViewFilters: () => void;
}

export const sliceEstilos: StateCreator<Estilos> = (set) => ({
	filtersView: false,
	navBarView: false,
	changeViewFilters: () => {
		set((state) => ({ ...state, filtersView: !state.filtersView }));
	},
	changeViewNavBar: () => {
		set((state) => ({ ...state, navBarView: !state.navBarView }));
	},
});
