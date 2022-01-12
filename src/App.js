import FlagTableMaster from './fl-components/FlagTablemaster'
import MenuComp from './mainmenu/menuholder'

import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"

function App() {

    return (
      <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>




          <VStack spacing={8}>
            <FlagTableMaster/>

          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
      
    )

}
export default App;
