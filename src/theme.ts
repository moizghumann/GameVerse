import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// configurig the color mode of the page 

// giving config object typesafety of themeConfig
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme({ config })

export default theme