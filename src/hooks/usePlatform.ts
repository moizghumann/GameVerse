import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';
import { FetchData } from '../services/api-client';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => useQuery({
    queryKey: ['platform'],
    queryFn: () => apiClient
        .get<FetchData<Platform>>('/platforms/lists/parents')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms }
})

export default usePlatform