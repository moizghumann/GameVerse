import { Game } from "../hooks/useGames";
import bullsEye from '../assets/bulseye.png';
import thumbsUp from '../assets/thumbsup.png';
import noEntry from '../assets/noentry.png';
import { Image, ImageProps } from "@chakra-ui/image";

interface Prop {
    rating: number;
}

const Emoji = ({ rating }: Prop) => {
    if (rating < 3) return null;

    let emojiMap: { [key: number]: ImageProps } = {
        3: { src: noEntry, alt: 'not recommended', boxSize: '25px' },
        4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
        5: { src: bullsEye, alt: 'best', boxSize: '35px' }

    }

    return (
        <Image {...emojiMap[rating]} />

    )
}

export default Emoji