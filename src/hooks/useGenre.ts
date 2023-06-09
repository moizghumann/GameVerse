import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genres {
    id: number;
    name: string;
}

interface FetchGenres {
    count: number;
    results: Genres[];
}

const useGenre = () => {

    const [genre, setGenre] = useState<Genres[]>();
    const [error, setError] = useState();

    const [loading, isloading] = useState(false);

    useEffect(() => {
        // new instance of abortcontroller  to let us cancel request any time
        const controller = new AbortController();

        isloading(true)

        apiClient.get<FetchGenres>('/genres', { signal: controller.signal })
            .then(res => { setGenre(res.data.results); isloading(false) })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                isloading(false)
            })

        return () => controller.abort()
    }, [])

    return { genre, error, loading }
}

export default useGenre;