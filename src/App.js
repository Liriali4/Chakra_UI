import * as React from 'react'
import { Box, ChakraProvider, Flex, Grid, Text } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Box
        w="100%"
        h="100vh"
        bg='tomato'

      >
        <Box
          maxW="960px"
          mx="auto"
          bg="#c9c"
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Flex
            align="center"
            justify="space-around"

            bg="#fff"
            w="90%"
            h="90%"
          >
        
        <Box display="grid" gridGap={2} gridAutoFlow="row dense">
          GridBox
         <Box bg="#c9c">PPP</Box>
         <Box bg="#fff">PPP</Box>
         <Box bg="#000">PPP</Box>
         <Box bg="#c2c2c2">PPP</Box>
        </Box>

        <Grid gap={2} autoFlow="row dense">
          Grid
          <Box bg="#c9c">PPP</Box>
         <Box bg="#fff">PPP</Box>
         <Box bg="#000">PPP</Box>
         <Box bg="#c2c2c2">PPP</Box>
        </Grid>
  </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

