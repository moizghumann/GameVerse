import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, { FetchData } from '../services/api-client';
import { Platform } from './usePlatforms';
import ms from 'ms';

//               class APIClient<T>
const apiClient = new APIClient<Game>('/games')

export interface Game {
    id: number;
    name: string;
    background_image: string;
    // [array of {object with property: which is {object}}]
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    ordering: string;
    search: string;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchData<Game>, Error>({
    queryKey: ['games', gameQuery],
    // queryFn is expected to be a function that takes no arguments and returns a Promise. This function is responsible for performing the actual data fetching logic.
    // since we need to pass configuration as arguments to getAll method and queryFn does not expect any argument in its callback function, we use an addition callback wrapper with no arguments
    queryFn: ({ pageParam = 1 }) =>
        apiClient
            .getAll({
                params: {
                    genres: gameQuery?.genreID,
                    parent_platforms: gameQuery?.platformID,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.search,
                    page: pageParam
                }
            }),
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: ms('1 day') // 24hr
})

// const useGames = (gameQuery: GameQuery) => useData<Game>('/games',
//     // {} is a request configuration object, a second parameter to our useData() hook with a key params which has a query parameter with object value 
//     // { params: {genres: selectedGenre?.id} }

//     // A request configuration object is an optional parameter that can be passed to Axios, when making API requests. It allows you to customize various aspects of the HTTP request being sent, such as headers, query parameters, request body, timeouts, and more.

//     // Query parameters are key-value pairs that are appended to the URL of a request. They are used to provide additional information or instructions to the server. Query parameters are commonly used in GET requests to filter, sort, or paginate data.

//     // the query parameter 'genres' with a value of 'selectedGenre?.id' will be added to the request URL like this: '/games?genres=selectedGenreIdValue'. The API server will then process the request based on this query parameter and return the corresponding data.
//     {
//         params: {
//             genres: gameQuery.genre?.id,
//             parent_platforms: gameQuery.platform?.id,
//             ordering: gameQuery.sortOrder,
//             search: gameQuery.search
//         }

//     }, [gameQuery]
// )

export default useGames