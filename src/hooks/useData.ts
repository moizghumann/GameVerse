import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";


interface FetchData<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>();
    const [error, setError] = useState();

    const [loading, isloading] = useState(false);

    useEffect(() => {
        // new instance of abortcontroller  to let us cancel request any time
        const controller = new AbortController();

        isloading(true)

        // Send a GET request to retrieve genres from the API
        apiClient.get<FetchData<T>>(endpoint, { signal: controller.signal })
            .then(res => { setData(res.data.results); isloading(false) })
            .catch(err => {

                // Check if the error is an instance of CanceledError, indicating the request was canceled
                if (err instanceof CanceledError) return;
                setError(err.message)
                isloading(false)
            })

        // Clean up function that aborts the request if the component is unmounted or the dependency changes
        return () => controller.abort()
    }, [])

    return { data, error, loading }
}

export default useData;