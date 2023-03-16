import * as React from 'react'
import { Box, Button, ChakraProvider, Flex, Grid, SimpleGrid, Text } from '@chakra-ui/react'


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
            <Button
  colorScheme="teal"
  _hover={{
    background: "white",
    color: "teal.500",
  }}
>
  Hover me
</Button>

<Box
  role="group"
>
  <Box
    _hover={{ fontWeight: 'semibold' }}
    _groupHover={{ color: 'tomato' }}
  >
  </Box>
</Box>

<Box
  _before={{ content: '"🙂"', display: 'inline-block', mr: '5px' }}
>
  A pseudo element
</Box>

<Button as='a' target='_blank' variant='outline' href='https://chakra-ui.com'>
  Hello
</Button>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

