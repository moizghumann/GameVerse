import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"


const ToggleColorMode = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack>
            <Text fontWeight={'semibold'} >Mode</Text>
            <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        </HStack>
    )
}

export default ToggleColorMode