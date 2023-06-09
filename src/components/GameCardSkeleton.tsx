import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameCardSkeleton = () => {
    return (
        <Card width={'300px'} borderRadius={'10'} overflow='hidden'>
            {/* adding a blurred div in card to mimic the image */}
            < Skeleton height={'200px'} />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card >
    )
}

export default GameCardSkeleton