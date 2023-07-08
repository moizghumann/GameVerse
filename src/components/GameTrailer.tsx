import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers"

interface Prop {
    gameID: number;
}

const GameTrailer = ({ gameID }: Prop) => {
    const { data, error, isLoading } = useTrailers(gameID)
    console.log('shit', data?.results);

    if (isLoading) return <Spinner />
    if (error) throw error;

    const first = data?.results[0]
    if (!first) return null;

    return first ? (
        <video
            title={first.name}
            src={first.data[480]}
            poster={first.preview}
            controls
        />
    ) : null
}

export default GameTrailer