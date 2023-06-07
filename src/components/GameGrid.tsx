import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface Games {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Games[]
}

const GameGrid = () => {
    // state hook to store games 
    const [games, setGames] = useState<Games[]>([])
    // state hook for errors
    const [error, setError] = useState('')

    // effect hook to fetch games from api when GameGrid comp renders/loads
    useEffect(() => {
        // .get method to fetch games data from rawg api via apiClient
        apiClient.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message))
    })
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid