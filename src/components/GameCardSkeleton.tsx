import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameCardSkeleton = () => {
    return (
        <Card>
            {/* adding a blurred div in card to mimic the image */}
            < Skeleton height={'200px'} />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton