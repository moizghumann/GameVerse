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

const useGameQueryStore = create<GameQueryStore>(set => ({
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