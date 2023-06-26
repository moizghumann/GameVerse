import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from '../services/api-client';
import ms from 'ms';


const apiClient = new APIClient<Genres>('/genres')

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('1 day'),  //24h

        // setting initial data to following will have a type error, since the promise returned by queryfn here is of type <FetchData<Genres>>
        // while the initial data here is undefined initially
        // initialData: { count: genres.length, results: genres } // data stored in the cache

        // to solve this, the types of inital data and queryFn response should be same
        // how to do it? look up the response of api fetch in chrome dev tools, copy the data to genres and set initial data to genres
        initialData: genres
    })

export default useGenres;