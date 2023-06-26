import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import APIClient from '../services/api-client';


const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platform'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h

    // setting initial data to following will have a type error, since the promise returned by queryfn here is of type <FetchData<Platform>>
    // while the initial data here is undefined initially
    // initialData: { count: platforms.length, results: platforms } // data stored in the cache

    // to solve this, the types of inital data and queryFn response should be same
    // how to do it? look up the response of api fetch in chrome dev tools, copy the data to platforms.ts file and set initial data to platforms
    initialData: platforms
})

export default usePlatforms