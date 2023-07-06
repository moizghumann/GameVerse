import { Platform } from './Platform';


export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    // [array of {object with property: which is {object}}]
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    ordering: string;
    search: string;
    rating_top: number;
    description_raw: string;
}
