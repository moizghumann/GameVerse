import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchData } from "./useData";

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenre = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: () => apiClient
            .get<FetchData<Genres>>('/genres')
            .then(res => res.data),

        staleTime: 24 * 60 * 60 * 1000,  //24h
        initialData: { count: genres.length, results: genres } // data stored in the cache
    })

export default useGenre;