import { Screenshot } from "../entities/Screenshot";
import APIClient from "../services/api-client"
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (id: number) => {
    const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', id],
        queryFn: apiClient.getAll
    })
}

export default useScreenshots;
