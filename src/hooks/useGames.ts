import { CanceledError } from 'axios';
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

interface Games {
    id: number;
    name: string;
}

interface FetchGames {
    count: number;
    results: Games[];
}

const useGames = () => {
    // state hook to store games 
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState('');

    // effect hook to fetch games from api when GameGrid comp renders/loads
    useEffect(() => {
        // Abortcontroller method to let us cancel request anytime
        const controller = new AbortController();

        apiClient
            // .get method to fetch games data from rawg api via apiClient
            .get<FetchGames>('/games', { signal: controller.signal })
            .then(res => { setGames(res.data.results) })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => controller.abort();
    }, [])


    return { games, error };
}

export default useGames