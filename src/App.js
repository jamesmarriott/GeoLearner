import TableMaster from './components/Tablemaster'

import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"

function App() {

    return (
      <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>

          <VStack spacing={8}>
            <TableMaster/>

          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
      
    )

}
export default App;
