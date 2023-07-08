import axios, { AxiosRequestConfig } from 'axios';

export interface FetchData<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    // property names are hardcoded, e.g cant use apiKey here instead of key
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3292e892d48d42d4a27f039de47b7911'
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }
    // Within the APIClient class, the getAll method takes a config object as a parameter, which includes the params property. The params property contains an object with key-value pairs representing the query parameters to be included in the API request.
    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchData<T>>(this.endpoint, config)
            .then(res => res.data)
    }

    get = (id: number | string) => {
        return axiosInstance
            .get<T>(this.endpoint + '/' + id)
            .then(res => res.data)
    }
}

export default APIClient