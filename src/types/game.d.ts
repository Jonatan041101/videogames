export interface GameDetail {
	achievements_count: number;
	added: number;
	added_by_status: AddedByStatus;
	additions_count: number;
	alternative_names: any[];
	background_image: string;
	background_image_additional: string;
	clip: null;
	creators_count: number;
	description: string;
	description_raw: string;
	developers: Developer[];
	dominant_color: string;
	esrb_rating: null;
	game_series_count: number;
	genres: Developer[];
	id: number;
	metacritic: number;
	metacritic_platforms: any[];
	metacritic_url: string;
	movies_count: number;
	name: string;
	name_original: string;
	parent_achievements_count: number;
	parent_platforms: ParentPlatform[];
	parents_count: number;
	platforms: PlatformElement[];
	playtime: number;
	publishers: Developer[];
	rating: number;
	rating_top: number;
	ratings: Rating[];
	ratings_count: number;
	reactions: { [key: string]: number };
	reddit_count: number;
	reddit_description: string;
	reddit_logo: string;
	reddit_name: string;
	reddit_url: string;
	released: Date;
	reviews_count: number;
	reviews_text_count: number;
	saturated_color: string;
	screenshots_count: number;
	slug: string;
	stores: Store[];
	suggestions_count: number;
	tags: Developer[];
	tba: boolean;
	twitch_count: number;
	updated: Date;
	user_game: null;
	website: string;
	youtube_count: number;
}

export interface AddedByStatus {
	beaten: number;
	dropped: number;
	owned: number;
	playing: number;
	toplay: number;
	yet: number;
}

export interface Developer {
	domain?: string;
	games_count: number;
	id: number;
	image_background: string;
	language?: Language;
	name: string;
	slug: string;
}

export enum Language {
	Eng = 'eng',
}

export interface ParentPlatform {
	platform: ParentPlatformPlatform;
}

export interface ParentPlatformPlatform {
	id: number;
	name: string;
	slug: string;
}

export interface PlatformElement {
	platform: PlatformPlatform;
	released_at: Date;
	requirements: Requirements;
}

export interface PlatformPlatform {
	games_count: number;
	id: number;
	image: null;
	image_background: string;
	name: string;
	slug: string;
	year_end: null;
	year_start: null;
}

export interface Requirements {
	minimum: string;
}

export interface Rating {
	count: number;
	id: number;
	percent: number;
	title: string;
}

export interface Store {
	id: number;
	store: Developer;
	url: string;
}
export interface Reedit {
	count: number;
	next: string;
	previous: null;
	results: Comment[];
}

export interface Comment {
	created: Date;
	id: number;
	image: null | string;
	name: string;
	text: string;
	url: string;
	username: string;
	username_url: string;
}

interface Locale {
	count: number;
	next: string;
	previous;
}

interface Developer {
	id: number;
	name: String;
	slug: string;
	image: string;
	image_background: string;
	games_count: number;
	games: Games;
}

export interface ResultDeveloper extends Locale {
	results: Developer[];
}
export interface DeveloperMap {
	id: number;
	image: string;
	name: string;
	image_background: string;
}
