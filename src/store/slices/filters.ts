import { SelectFilterType } from '@/components/FiltersMap';
import { StateCreator } from 'zustand';

export interface FiltersQuery {
	tags: string | null;
	genres: string | null;
	platforms: string | null;
	stores: string | null;
}

export interface FiltersAndCarruzel {
	countPageSize: number;
	countResults: number;
	filters: FiltersQuery;
	valueSearch: string;
	changeResults: (results: number) => void;
	changeFilters: (type: SelectFilterType, value: string | null) => void;
	changeValueSearch: (value: string) => void;
}

export const sliceFilter: StateCreator<FiltersAndCarruzel> = (set) => ({
	countPageSize: 20,
	countResults: 849667,
	valueSearch: '',
	filters: {
		genres: null,
		platforms: null,
		stores: null,
		tags: null,
	},
	changeFilters: (type, value) => {
		set((state) => ({
			...state,
			filters: {
				...state.filters,
				[type]: value,
			},
		}));
	},
	changeValueSearch: (value) => {
		set((state) => ({ ...state, valueSearch: value }));
	},
	changeResults: (results) => {
		set((state) => ({ ...state, countResults: results }));
	},
});
