import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';
import { FetchData } from './useData';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => useQuery({
    queryKey: ['platform'],
    queryFn: () => apiClient
        .get<FetchData<Platform>>('/platforms')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms }
})

export default usePlatform