import { create } from "zustand";

// query object in order to refactor the code
interface GameQuery {
    genreID?: number;
    platformID?: number;
    sortOrder?: string;
    search?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    updateGenreID: (genreID: number) => void;
    updatePlatformID: (platformID: number) => void;
    updateSortOrder: (sortOrder: string) => void;
    updateSearch: (search: string) => void
}

// The create function takes a callback function as its argument, which receives a set function to update the state.
// create function returns an object containing initial state and functions, 
// thus set => ({}) instead of set => {}
const useGameQueryStore = create<GameQueryStore>(set => ({
    // Inside the callback, define your initial state and any actions or functions that modify the state.
    gameQuery: {} as GameQuery,
    updateGenreID: genreID =>
        set(store => ({ gameQuery: { ...store.gameQuery, genreID } })),
    updatePlatformID: platformID =>
        set(store => ({ gameQuery: { ...store.gameQuery, platformID } })),
    updateSortOrder: sortOrder =>
        set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
    updateSearch: (search) =>
        set(() => ({ gameQuery: { search } }))
}))

export default useGameQueryStore