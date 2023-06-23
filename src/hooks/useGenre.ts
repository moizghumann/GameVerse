import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from '../services/api-client';


const apiClient = new APIClient<Genres>('/genres')

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenre = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,  //24h
        initialData: { count: genres.length, results: genres } // data stored in the cache
    })

export default useGenre;