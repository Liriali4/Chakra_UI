import * as React from 'react'
import { Box, ChakraProvider, Flex, Text } from '@chakra-ui/react'


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
            <Text bg="#c9c" >Flex Container</Text>
            
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >Olá Chakra</Text >

            <Box bg="#c9c">
              Box with Flex props
            </Box>



          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

