import axios from 'axios';

export interface FetchData<T> {
    count: number;
    results: T[];
}

export default axios.create({
    // property names are hardcoded, eg cant yse apiKey here instead of key
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3292e892d48d42d4a27f039de47b7911'
    }
})