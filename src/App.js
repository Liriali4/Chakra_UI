import * as React from 'react'
import { Box, ChakraProvider, Text } from '@chakra-ui/react'


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
        >
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >Olá Chakra</Text >
          <Text fontSize="md" >fontSize="md"</Text >


          <Text fontSize={32} >font-size 32px</Text>

          <Text fontSize='2em' >fontSize='2em'</Text>

          <Text textAlign={['left', 'center']} >textAlign={['left', 'center']}</Text>


        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

