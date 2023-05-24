export interface TiposDeFilter {
	count: number;
	next: null;
	previous: null;
	results: FilterResult[];
}

export interface FilterResult {
	games: Game[];
	games_count: number;
	id: number;
	image_background: string;
	name: string;
	slug: string;
}

export interface Game {
	added: number;
	id: number;
	name: string;
	slug: string;
}
