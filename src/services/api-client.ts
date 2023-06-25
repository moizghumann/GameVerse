import axios, { AxiosRequestConfig } from 'axios';

export interface FetchData<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    // property names are hardcoded, eg cant use apiKey here instead of key
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

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchData<T>>(this.endpoint, config)
            .then(res => res.data)
    }
}

export default APIClient