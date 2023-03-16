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

          <Box w="10%" h="32px" bg="#fedadc" />

          <Text fontSize="md" >fontSize="md"</Text >

          <Box width="10%" height={32} bg="#000" />


          <Text fontSize={32} >font-size 32px</Text>

          <Box boxSize="sm" bg="#033300"/>

          <Text fontSize='2em' >fontSize='2em'</Text>

          <Box w={256} bg="#abcffd"/>

          <Text textAlign={['left', 'center']} >textAlign={['left', 'center']}</Text>
          <Box w="10%" h="32px" bg="#fde643"/>
          <Text fontSize='2em' >--------------</Text>
          <Box w='40px' bg="#244fff"/>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

