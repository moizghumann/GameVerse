import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreSideBar from "../components/GenreSideBar"
import PlatformFilter from "../components/PlatformFilter"
import SortSelector from "../components/SortSelector"

const HomePage = () => {

    return (
        <>
            <Grid templateAreas={{
                base: ` "main"`,           // for mobile
                lg: `"aside main"`    // for 1280px viwpoint and higher
            }}
                templateColumns={{
                    base: '1fr',
                    lg: '250px 1fr'
                }}
                gap={1}
            >

                {/* The Show component controls the visibility of its children based on the screen size */}
                <Show above='lg'>
                    <GridItem area='aside' borderRadius={10} paddingLeft={10} paddingBottom={8}>
                        {/* getting data as prop from GenreSideBar to pass it as a prop to GameGrid to show only the selected GameCards by configuring the api request */}
                        <GenreSideBar />
                    </GridItem>
                </Show>

                <GridItem area='main'>
                    <Box paddingLeft={'20px'} >
                        <GameHeading />
                        {/* 
            1. onSelectedPlatform gets the value of selected platform from platformFilter function and updates the state thru a callback function
            2. now we need to send the updated state back to platformFilter function to show the selected platform, so we can pass the state gameQuery.platform in selectedPlatform      
        */}
                        <Flex marginBottom={2}>
                            <PlatformFilter />
                            <Box marginLeft={4}>
                                <SortSelector />
                            </Box>
                        </Flex>
                    </Box>
                    {/* 
        1. destruction here allows to pass individual properties of the gameQuery object as separate props to the GameGrid component.
        2. spreading it as {...gameQuery} will result in two separate props being passed to the GameGrid component: genre={gameQuery.genre} and platform={gameQuery.platform}
        3. This can be useful if the GameGrid component expects these properties as separate props and accesses them individually within its implementation. It allows for a more concise and readable way of passing multiple props from an object.
         */}

                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    )
}

export default HomePage