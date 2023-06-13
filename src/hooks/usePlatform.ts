import platforms from '../data/platforms';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => ({ data: platforms, loading: false, error: null })

export default usePlatform