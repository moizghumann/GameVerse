import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { FetchData } from '../services/api-client';
import { Platform } from './usePlatforms';
import ms from 'ms';
import useGameQueryStore from '../state-management/gameQueryStore';

//               class APIClient<T>
const apiClient = new APIClient<Game>('/games')

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    // [array of {object with property: which is {object}}]
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    ordering: string;
    search: string;
    rating_top: number;
    description_raw: string;
}

const useGames = () => {

    // When the useGames hook is called, it retrieves the current gameQuery parameters from the useGameQueryStore hook.
    // This ensures that the fetched data is based on the current gameQuery parameters, allowing the user to dynamically update the query and see relevant results.
    const gameQuery = useGameQueryStore(s => s.gameQuery)

    // Using <FetchData<Game>> as the type parameter for useInfiniteQuery specifies the expected structure of the API response. It enables type checking to ensure that the fetched data matches the defined Game type, making sure everything works correctly and avoids errors.
    return useInfiniteQuery<FetchData<Game>, Error>({
        queryKey: ['games', gameQuery],
        // The queryFn in the context of the useInfiniteQuery hook is typically expected to take no arguments. However, there are scenarios where you might need to pass additional arguments to the queryFn function to customize the data fetching behavior. This function is responsible for performing the actual data fetching logic.
        // since we need to pass configuration as arguments to getAll method and queryFn does not expect any argument in its callback function, we use an addition callback wrapper with no arguments, but this approach introduces a dependency on the external useGameQueryStore hook and assumes that it's available and correctly configured, so we'll avoid it
        queryFn: ({ pageParam = 1 }) =>
            apiClient
                // the params property is used within the queryFn function to specify the query parameters for the API request. These query parameters define additional information or instructions to be sent to the server when fetching the data.
                // the "existing info" on the server represents the entire set of data available, and query parameters allow you to refine or specify the subset of data you want to fetch from the server.
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
}

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