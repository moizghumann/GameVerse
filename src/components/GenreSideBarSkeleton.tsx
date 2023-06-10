import { Box, HStack, Skeleton, SkeletonText } from '@chakra-ui/react'


const GenreSideBarSkeleton = () => {
    return (
        <HStack>
            <Skeleton boxSize={'35px'} borderRadius={10} />
            <Box padding={'10px'} >
                <SkeletonText noOfLines={2} />
            </Box>
        </HStack>
    )
}

export default GenreSideBarSkeleton