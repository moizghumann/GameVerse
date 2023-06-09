import { CanceledError } from 'axios';
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    // array of (object with (property which is object))
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGames {
    count: number;
    results: Game[];
}

const useGames = () => {
    // state hook to store games 
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    const [loading, setLoading] = useState(false)

    // effect hook to fetch games from api when GameGrid comp renders/loads
    useEffect(() => {
        // Abortcontroller method to let us cancel request anytime
        const controller = new AbortController();

        setLoading(true);
        apiClient
            // .get method to fetch games data from rawg api via apiClient
            .get<FetchGames>('/games', { signal: controller.signal })
            .then(res => { setGames(res.data.results); setLoading(false) })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false)
            });

        return () => controller.abort();
    }, [])


    return { games, error, loading };
}

export default useGames