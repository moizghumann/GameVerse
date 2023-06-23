/** import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";


export interface FetchData<T> {
    count: number;
    results: T[];
}

Custom hook to fetch data from an API endpoint
endpoint: The URL or path of the API endpoint to fetch data from
requestConfig: Optional configuration object for customizing the API request (e.g., headers, query parameters)
deps: Optional array of dependencies that triggers a re-fetch when changed (e.g., selectedGenre)
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>();
    const [error, setError] = useState();

    const [loading, isloading] = useState(false);

    useEffect(() => {
        // new instance of abortcontroller to let us cancel request any time
        const controller = new AbortController();

        isloading(true)

        // Send a GET request to retrieve genres from the API
        // ...requestConfig -> think of it as merging two objects together. The default options are always included ({ signal: controller.signal }), and any additional options from the requestConfig object like headers, query parameters(in our case) etc are also included. This way, we can provide custom configuration for the API request to get corresponding data(in our case, selectedGenre.id).
        apiClient.get<FetchData<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then(res => { setData(res.data.results); isloading(false) })
            .catch(err => {

                // Check if the error is an instance of CanceledError, indicating the request was canceled
                if (err instanceof CanceledError) return;
                setError(err.message)
                isloading(false)
            })

        // Clean up function that aborts the request if the component is unmounted or the dependency changes
        return () => controller.abort()

        // The purpose of using ... in this context is not to add additional elements to the deps[], but rather to create a new array depsCopy[] with the same elements. 
        // This approach allows you to handle any number of dependencies consistently within the Effect hook.
        // So, if you pass additional dependencies as arguments to the useData hook, the spread operator will handle them correctly in the useEffect dependency array
    }, deps ? [...deps] : [])

    return { data, error, loading }
}

export default useData; */

// dos nothing, just to prevent error
export { }