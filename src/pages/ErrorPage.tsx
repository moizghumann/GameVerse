import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router'
import NavBar from '../components/NavBar'

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Heading>Oops!</Heading>
                <Text>an unexpected error has landed at mars </Text>
                <Text>
                    {isRouteErrorResponse(error)
                        ? 'invalid page!'
                        : 'unexpected error, cant fly to moon rn!'}
                </Text>
            </Box>
        </>
    )
}

export default ErrorPage