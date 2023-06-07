import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3292e892d48d42d4a27f039de47b7911'
    }
})